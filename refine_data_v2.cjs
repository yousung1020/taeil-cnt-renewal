const fs = require('fs');

function extractDateFromContent(content) {
    // Look for patterns like 2024. 09. 10 or 2024-09-10 or 2024년 09월 10일
    const dateMatch = content.match(/(\d{4})[\.\s년]+(\d{1,2})[\.\s월]+(\d{1,2})/);
    if (dateMatch) {
        const year = dateMatch[1];
        const month = dateMatch[2].padStart(2, '0');
        const day = dateMatch[3].padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    return null;
}

function refineData(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const startMarker = '= [';
    const endMarker = '];';
    
    const startIndex = content.indexOf(startMarker) + startMarker.length - 1;
    const endIndex = content.lastIndexOf(endMarker) + 1;
    
    let arrayStr = content.substring(startIndex, endIndex);
    let data = JSON.parse(arrayStr);

    data.forEach(item => {
        // 1. Refine Title
        if (!item.title || item.title.trim() === "" || item.title === item.description) {
            // Try to find the first meaningful text in content
            // Remove tags and find first non-empty line
            let plainContent = item.content.replace(/<[^>]+>/g, '\n').split('\n').map(l => l.trim()).filter(l => l.length > 5);
            if (plainContent.length > 0) {
                item.title = plainContent[0];
            }
        }
        
        // Final title cleanup: remove HTML entities if any leaked
        item.title = item.title.replace(/&[a-z0-9#]+;/gi, '').trim();

        // 2. Refine Date from content
        const extractedDate = extractDateFromContent(item.content);
        if (extractedDate) {
            item.date = extractedDate;
        }
    });

    const newContent = content.substring(0, startIndex) + JSON.stringify(data, null, 2) + content.substring(endIndex);
    fs.writeFileSync(filePath, newContent);
    console.log(`Refined ${filePath}`);
}

refineData('src/data/news.ts');
refineData('src/data/social.ts');
