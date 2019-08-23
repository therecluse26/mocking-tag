// Creates a <mock>tAg tHaT yoU caN UsE to MoCK WitH</mock>
((v) => {
    let c = (e) => {
        let o = e.innerText,
            n = "",
            i = o.length;
        for (let i = 0; i < o.length; i++) {
            n += Math.random() >= 0.5 == 1 ? o.charAt(i).toUpperCase() : o.charAt(i).toLowerCase();
        }
        e.innerText = n;
    };
    document.createElement(v);
    let ts = document.getElementsByTagName(v);
    for (let i = 0; i < ts.length; i++) {
        c(ts[i])
    }
})("mock")
