const mail_icon = document.getElementById("mail");
const phone_icon = document.getElementById("phone");

mail_icon.addEventListener("click", () => {
    const mail_info = document.getElementById("mail_info").textContent ;
    
    if (mail_info !== "") {
        navigator.clipboard.writeText(mail_info)
            .then(() => {
                console.log("e-mail copied to clipboard", mail_info);
                alert("e-mail copied to clipboard");
            })
            .catch(err => {
                console.error("Failed coping e-mail", err);
                alert("Failed coping e-mail");
            });
    }
});

phone_icon.addEventListener("click", () => {
    const phone_info = document.getElementById("phone_info").textContent ;
    
    if (phone_info !== "") {
        navigator.clipboard.writeText(phone_info)
            .then(() => {
                console.log("phone copied to clipboard", phone_info);
                alert("phone copied to clipboard");
            })
            .catch(err => {
                console.error("Failed coping phone", err);
                alert("Failed coping phone");
            });
    }
});
