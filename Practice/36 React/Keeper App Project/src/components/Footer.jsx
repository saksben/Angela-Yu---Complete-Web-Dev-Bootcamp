import React from "react";

// Creates footer component
function Footer() {
    let year = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright ⓒ {year}</p>
        </footer>
    )
}

export default Footer;