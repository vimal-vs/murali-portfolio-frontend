const getEmbedUrl = (url) => {
    const urlObj = new URL(url);
    let videoId = '';

    if (urlObj.hostname === 'www.youtube.com' && urlObj.pathname === '/watch') {
        videoId = urlObj.searchParams.get('v');
    } else if (urlObj.hostname === 'youtu.be') {
        videoId = urlObj.pathname.slice(1);
    }

    return `https://www.youtube.com/embed/${videoId}`;
};

export default getEmbedUrl;