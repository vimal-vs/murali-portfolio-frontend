export const slug = (title) => {
    return title
        .toLowerCase()               // Convert to lowercase
        .trim()                      // Remove whitespace from both sides
        .replace(/\s+/g, '-')        // Replace spaces with hyphens
        .replace(/[^\w-]+/g, '')     // Remove all non-word characters (except hyphens)
        .replace(/--+/g, '-')        // Replace multiple hyphens with a single hyphen
        .replace(/^-+|-+$/g, '');    // Trim hyphens from both ends
};