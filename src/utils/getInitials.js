export function getInitials(name) {
    if(!name) return "";
    const words = name.split(" ");
    let initials = "";
    for(let i = 0; i <= 1; i++) {
        initials += words[i][0].toUpperCase();
    }
    return initials;
}