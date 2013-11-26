function siteAssignment() {
    var url = Math.floor(Math.random() * 4);
    console.log(url);

    if (url === 0) {
        url = "https://docs.google.com/forms/d/1zduehZmOCE4-tINw_Jb_v2utU1sEQhZYuKqJ9QM7B00/viewform";
    } else if (url === 1) {
        url = "https://docs.google.com/forms/d/1zduehZmOCE4-tINw_Jb_v2utU1sEQhZYuKqJ9QM7B00/viewform";
    } else if (url === 2) {
        url = "https://docs.google.com/forms/d/1bRRvdebkxiLTtkB9PVAOzdijuBFhJHXZ-Lo9PGNHVqc/viewform";
    } else {
        url = "https://docs.google.com/forms/d/1bRRvdebkxiLTtkB9PVAOzdijuBFhJHXZ-Lo9PGNHVqc/viewform";
    }
    return url;
}

