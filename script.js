const text = document.getElementById("textLimits");
const output = document.querySelector('.output');
const sub = document.getElementById('sub');

text.addEventListener('keyup', textCounter);
text.addEventListener('change', textCounter);
text.addEventListener('cut', textCounter);
text.addEventListener('paste', textCounter);
sub.addEventListener('click', sendInput);

const maxLength = 100;
const warnLength = 20;

window.onload = () => {
    output.classList.remove('red-text');
    output.innerHTML = `${maxLength} charecters left`;
}

function textCounter(e) {
    if (e.type === 'keyup' || e.type === 'change') {
        let count = text.value.length;
        output.innerHTML = `${maxLength - count} charecters left`;
        output.classList.remove('red-text');

        if (count === '') {
            output.innerHTML = `${maxLength} charecters left`;
        }

        if (maxLength - count === 20 || maxLength - count >= 1 && maxLength - count <= 20) {
            output.classList.add('red-text');
            output.innerHTML = `${maxLength - count} charecters left`;
            return false;
        }

        if (maxLength - count == 0) {
            if (e.keyCode === 8 || e.keycode === 37 || e.keycode === 38 || e.keycode === 39 || e.keycode === 40 || e.keyCode === 127) {
                return true;
            }
            output.classList.add('red-text');
            output.innerHTML = `Reached the maximum length`;
            e.preventDefault();
        }

        if (count > maxLength) {
            output.classList.add('red-text');
            output.innerHTML = `Reached the maximum length`;
            text.value = text.value.substring(0, maxLength);
            return false;
        }
    }

    if (e.type === 'cut') {
        e.preventDefault();
    }

    if (e.type === 'paste') {
        e.preventDefault();
    }

}

function sendInput() {
    if (text.value == '') {
        alert("Please Enter Your Message");
        text.focus();
        return false;
    }
    var msg = text.value;
    alert(`Your Message is: ${ msg }`);
}