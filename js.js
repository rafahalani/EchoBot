const API_URL = 'api.php';
document.getElementById("chat-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var message = document.getElementById("input").value;

	var inputList = document.createElement("p");
	inputList.classList.add("left");
    var inputnode = document.createTextNode(message);
    inputList.appendChild(inputnode);
	document.getElementById("message").appendChild(inputList);

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'message': message}),
    })
        .then(response => response.json())
        .then((json) => {
            output(json.message);
        });
});

function output(input) {

    var echo = input;

    //document.getElementById("chatbot").innerHTML = echo;
    document.getElementById("input").value = ""; //clear input value
	var chatbotList = document.createElement("p");
	chatbotList.classList.add("right");
    var chatbotnode = document.createTextNode(echo);
    chatbotList.appendChild(chatbotnode);
    document.getElementById("message").appendChild(chatbotList);
}
