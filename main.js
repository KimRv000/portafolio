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
/*
document.addEventListener('DOMContentLoaded', function() {
    const projectBirds = document.getElementById('projectBirds');
    const projectTextBirds = document.getElementById('projectTextBirds');

    function showText() {
        projectTextBirds.classList.add('visible');
    }

    function hideText() {
        projectTextBirds.classList.remove('visible');
    }

    projectBirds.addEventListener('mouseover', showText);

    projectBirds.addEventListener('mouseleave', hideText);
});
*/
document.getElementById('projectBirds').addEventListener('click', function() {
    window.open('https://kimrv000.github.io/birds/', '_blank');
});
/*
document.addEventListener('DOMContentLoaded', function() {
    const projectTailwind = document.getElementById('projectTailwind');
    const projectTextTailwind = document.getElementById('projectTextTailwind');

    function showText() {
        projectTextTailwind.classList.add('visible');
    }

    function hideText() {
        projectTextTailwind.classList.remove('visible');
    }

    projectTailwind.addEventListener('mouseover', showText);

    projectTailwind.addEventListener('mouseleave', hideText);
});
*/
document.getElementById('projectTailwind').addEventListener('click', function() {
    window.open('https://kimrv000.github.io/tailwind_travels/', '_blank');
});

/*
document.addEventListener('DOMContentLoaded', function() {
    const projectTicTacToe = document.getElementById('projectTicTacToe');
    const projectTextTicTacToe = document.getElementById('projectTextTicTacToe');

    function showText() {
        projectTextTicTacToe.classList.add('visible');
    }

    function hideText() {
        projectTextTicTacToe.classList.remove('visible');
    }

    projectTicTacToe.addEventListener('mouseover', showText);

    projectTicTacToe.addEventListener('mouseleave', hideText);
});
*/
document.getElementById('projectTicTacToe').addEventListener('click', function() {
    window.open('https://kimrv000.github.io/tic-tac-toe/', '_blank');
});