function askQuestion() {
    var input = document.getElementById("user-query");
    var chatBox = document.getElementById("chat-box");
    var userText = "<div>User: " + input.value + "</div>";

    var botReply = "<div>Bot: " + getResponse(input.value) + "</div>";
    chatBox.innerHTML += userText + botReply;
    input.value = ""; // Clear input after sending
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getResponse(query) {
    query = query.toLowerCase().trim();
    switch (query) {
        case "who was the first president of the united states?":
            return "George Washington was the first president of the United States.";
        case "when did the second world war end?":
            return "The Second World War ended in 1945.";
        default:
            return "Sorry, I don't have the answer to that question. Updates to the model coming soon!";
    }
}

const sampleQueries = ["Here are some good examples of what type of questions we can help with! ", "What were the immediate public reactions to the stock market crash of 1929?",  "How did contemporary observers describe the effects of the Dust Bowl during the Great Depression?", "What were the arguments presented by both sides during the debates on the Civil Rights Act of 1964?"];

function displaySampleQueries() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = sampleQueries.join('<br><br>'); 
}

document.getElementById('user-query').addEventListener('focus', function() {
    document.getElementById('chat-box').innerHTML = '';
});

window.onload = displaySampleQueries;