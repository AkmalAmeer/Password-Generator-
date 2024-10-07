const specialChars = ['!', '\"', '#', '$', '%', '&', '*', '+', ',', '-', '.', '/', '@', '[', '\\', ']', '^', '~', '`', '{', '|', '}', '_'];

const passGenBtn = document.getElementById('display-btn');
const checkBtn = document.getElementById('check-btn');
const feedback = document.getElementById('feedback');

function randLetterGen(startASCII) {
    let num = randNumGen(25);
    return String.fromCharCode(num + startASCII);
}

function randNumGen(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate a password with a length of 6
function generatePassword() {
    let password = Array.from({
        length: 2
    });

    let randUppercase = randLetterGen(65);
    let randLowercase = randLetterGen(97);
    let randSpecialChar = specialChars[randNumGen(specialChars.length - 1)];
    let randNumeric = randNumGen(9);

    for (let i = 0; i < password.length; i++) {
        let randNum = randNumGen(126, 33);
        password[i] = String.fromCharCode(randNum);
    }

    password.push(randUppercase, randLowercase, randSpecialChar, randNumeric);

    return password.join('');
}

function checkPassword(password) {
    const lowerCase = /[a-z]/;
    const upperCase = /[A-Z]/;
    const number = /[0-9]/;
    const specialChar = /[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    return lowerCase.test(password) && upperCase.test(password) && number.test(password) && specialChar.test(password) && password.length >= 6;
}

passGenBtn.addEventListener('click', () => {
    let pass = generatePassword();
    document.getElementById('display-box').firstElementChild.textContent = pass;
});

checkBtn.addEventListener('click', () => {
    let customPass = document.getElementById('custom-pass').value;
    if (checkPassword(customPass)) {
        feedback.textContent = "Password is valid!";
        feedback.style.color = "#4caf50"; // green for valid password
    } else {
        feedback.textContent = "Password does not meet the requirements!";
        feedback.style.color = "#f5576c"; // red for invalid password
    }
});

const gradientColors = [
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #89f7fe, #66a6ff)',
    'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    'linear-gradient(135deg, #c2e9fb, #a1c4fd)',
    'linear-gradient(135deg, #84fab0, #8fd3f4)',
    'linear-gradient(135deg, #ffecd2, #fcb69f)'
];

function changeBackground() {
    let index = 0;
    setInterval(() => {
        document.body.style.background = gradientColors[index];
        document.body.style.backgroundSize = "200% 200%";
        document.body.style.transition = "background 1s ease";
        index = (index + 1) % gradientColors.length;
    }, 1000);
}

changeBackground();