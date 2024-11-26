// Function to show the modal
function showModal(message, question) {
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalQuestion = modal.querySelector('.modal-question');
    const closeBtn = modal.querySelector('.close');

    modalQuestion.textContent = question;
    modalContent.textContent = message;

    modal.style.display = 'block'; // Show the modal

    // Close button functionality
    closeBtn.onclick = function() {
        modal.style.display = 'none'; // Close the modal when clicking the close button
    }

    // Close the modal if the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Close modal if clicked outside
        }
    }
}

document.getElementById('extra-day').addEventListener('click', function() {
    showGame("EXTRA");
});
// Example of triggering the modal (can be placed inside your grid item logic)
document.querySelector('.day').addEventListener('click', function() {
    showModal("This is your message!", "What is your favorite color?");
});

// When the modal opens
document.body.classList.add('modal-open');

// When the modal closes
document.body.classList.remove('modal-open');

// minigames logic
const games = {
    "1": {
        question: "¿Cual es mi color favorito?",
        options: ["Negro", "Rojo", "Azul"],
        correctAnswer: "Negro",
        responseMessageCorrect: "Respuesta Correcta 😩🙏, puedes argumentar que el negro es una sombra pero me da igual 🗿, hoy es primero de diciembre, eso significa que se aproxima una de tus épocas favoritas del año, LA NAVIDAD 🎅🎉‼️, lastimosamente este es otro año en el que no podremos pasarla juntos, pero bueno, algún día se nos dará. Espero que disfrutes de tus vacaciones en Colombia y la pases genial MI AMOOORRR💗‼️",
        responseMessageIncorrect: "Imposible que no sepas 😮 (seguro que pensaste algo que lo contradice JAJA)"
    },
    "2": {
        question: "¿Como se llama el perro de mi hermano?",
        input: true,
        correctAnswer: ["Max", "max", "Maxito", "maxito"],
        responseMessage: "ASI ESSSSS‼️‼️, el maravilloso perrito de mi hermano se llama Max, aka Maxito, y bueno, ¿qué te puedo decir yo que ya no sepas de él? jeje. De verdad que tienes que conocerlo algún día y ojalá sea más pronto que tarde :3. Mira la famosa foto de Maxito sacando la lengua, ¡tan bello! 🥺🥺<br><br><img src='Fotos/MaxitoLengua.jpg' style='width: 50%;'>",
        responseMessageIncorrect: "Imposible que no sepas el nombre de un perro tan lindo y de el que tanto te he hablado 😮😮"
    },
    "3": {
        question: "¿Al final te llevaste la 3DS que te modee con tanto carinyo? 🥺",
        options: ["Si", "No"],
        correctAnswer: "Si",
        responseMessageCorrect: "YAAAAAYYYY 🥺💗, me alegro de que sea así, ya que lo hice con mucho amor :3. Espero que te ayude a que algunos momentos aburridos se pasen rápido :). Ya me darás feedback de cómo va todo y, si quieres añadir alguna cosa, solo tienes que avisarme.",
        responseMessageIncorrect: "AYYY, ¿CÓMO ASÍ? :(( Con todo el cariño y empeño que le puse a tu regalito 😔. Muy mal, mi amorcito 🥲."
    },
    "4":{
        question: "Una fotico mia para que no me extrañes mucho :3, TE AMOOOO 💗",
        responseMessage:"<p>No salgo muy bien jeje ,con tu hoodie hermoso :3, que lastimosamente ya no me pongo mucho por que me queda chiquito :( )</p><img src='Fotos/FotoMia.jpg' style='width: 50%;'><br>"
    },
    "5":{
        game: "tictactoe",
        responseMessage: "BIEN HECHO, MI AMOOORRR ‼️‼️ Espero que no haya sido una batalla demasiado dura. Sin embargo, como recompensa, aquí tienes una pista sobre tu regalo de Navidad de este año (en total son 3, ¡así que llevas 1/3!).<br><br><br><img src='foto'>"

    },
    "6":{
        question: " Veamos como esta tu memoria 🤨, de que color acordamos que serian las pared detras de nuestra cama en nuestra habitacion?",
        options: ["Gris y Blanco", "Negro y Blanco", "Gris y negro"],
        correctAnswer: "Negro y Blanco",
        responseMessageCorrect: "BUEENOOOO, ¿Y ESA MEMORIAAAAA?? 😩🙏. Así es, al final acordamos que serían mitad negro y mitad blanco, siendo cada mitad un triángulo (al menos la que está detrás de la cama). Aún queda mucho para que podamos cumplir ese sueño, pero si es contigo, esperaré todo lo que haga falta hasta que llegue ese día 🥺. Sabes que por ti haría mil y un cosas, y estoy seguro de que tú también 💗.",
        responseMessageIncorrect: "UYYYY al final sigues con tu memoria de pollito :3 🐣🐥"
    },
    "7":{
        question: "Hoy no hay minijuego 🥺",
        responseMessage: "Un día como hoy, hace 2 meses, fue nuestra reconciliación 🥺. De verdad que fue tan duro pensar que esto tan bonito se había acabado, pero bueno, al final pudimos hablar y solucionar las cosas, y no sabes cuánto me alegro de que haya sido así 💗. Prefiero solucionar las cosas contigo las veces que haga falta a intentarlo de nuevo con alguien más, a quien probablemente no llegue a amar tanto como a ti. TE AMO MUCHO, MUCHO, MUCHO, MUCHO 🥺💗. Espero que este nuevo año, apenas vuelvas de Colombia, podamos darnos todo el amor y cariño del mundo para compensar el tiempo que no nos hemos podido ver 😩 (mira lo felices que estamos, ¡es imposible no querer estar juntos! 🗿)."
    },
    "10":{
        game: "tictactoe",
        responseMessage: "EPAAAA, ¡estás on fire, mi amor! 🥵🙏 Con razón estás tan buena 🥺💗. Bueno, aquí tienes otra pista sobre tu regalo :3 (2/3).<br><br><br><img src='foto'>"
    },
    "13":{
        game: "minigame_day13"
    },
    "15":{
        game: "tictactoe",
        responseMessage: "Bueno, a este punto ya simplemente asumo que eres una experta en el tic-tac-toe JAJAJA, ¡qué grande mi niña! 💗. Ahora sí, última pista de tu regalito. A partir de aquí solo te queda adivinar qué es o esperarte a volver para verlo jeje :3 💗. Así que vuelve pronto 😤, ¡que ya te extraño mucho!<br><br><br><br><img src='Fotos/MissU.jpg' style='width:50%;'>"
    },
    "16":{
        question: "Quien nacio un 16 de agosto?",
        options: ["Charmander", "Juanito", "Los dos", "Los tres", "Doraemon"],
        correctAnswer: "Los tres",
        responseMessageCorrect: "DING DING DING 🔔‼️, Ese día nació un chico algo rarito y curioso, pero que se preocupa mucho por su gente y haría lo que fuera con tal de verlos felices. Sé que en ocasiones puedo ser complicado, Melanie, y seguramente en más de una ocasión hayas pensado en tirar la toalla, pero has sabido ver el lado bueno de mí y ayudarme a mejorar como persona. Espero algún día poder devolverte todo lo que has hecho por mí. Muchísimas gracias, mi amor. TE AMO MUCHÍSIMO, no te separes de mí nunca más 💗. Y bueno, no nos olvidemos de nuestro hijo más reciente, nuestro Charmander bonito, hermoso y adorable :3, y de nuestro primer hijo (al menos que tú me hayas dado), nuestro amado DORAMIOOONNN, que por cierto, todos aquí te extrañamos mucho, ¡así que de nuevo vuelve pronto! 💗 <br><br><img src='Fotos/cumple1.jpg' style='width:70%;'",
        responseMessageIncorrect: "Piensalo mas :3"
    },
    "20":{
        game: "tictactoe",
        responseMessage: "Bueno, quería aprovechar para decirte que lamento no haberte podido invitar a salir o a hacer otras cosas últimamente, pero debido a nuestros horarios apretados y mis gastos en transporte no he tenido una gran oportunidad 😔. Sin embargo, espero que sepas que te amo y que siempre lo haré, y que, a no más pueda, te lo compensaré de una forma u otra. Y quería proponerte algo :3, ¿qué te parece si cuando vuelvas planeamos un viaje a Francia? Puede sonar muy cliché, pero es la ciudad del amor 💗, así que me encantaría ir contigo."
    },
    "22":{
        question: "Como se llama el padre de megumi?",
        options: ["Gojo","Nanami","Toji"],
        correctAnswer: ["Gojo","Toji"],
        responseMessageCorrect: "Bueno, me sirve tanto Gojo como Toji, ya que uno es el padre biológico y el otro es su padre adoptivo JAJA. Hoy, un 22 de diciembre, nació Megumi. Sé que es de tus personajes favoritos, más que lo tienes en fornais jeje 😈. ¡Así que deséale un feliz cumpleaños! 🎉<img src='Fotos/padres.jpg' style='width:50%;'>",
        responseMessageIncorrect:"PERO COMO VA A SER NANAMIIII?? 😩"
    },
    "24":{
        question:"QUE DIA ES HOOOYYYY???",
        responseMessage: "YA ES 24 OMG OMG OMG, ¡ya falta nada para Navidad! :3 Más te vale enviarme mil fotitos de tu estreno de Navidad 😤😤, que seguro que te ves divina 🥺, como es de costumbre cuando hablamos de ti, jiji 💗. Seguramente hoy pases un día en familia, procura no emborracharte mucho :3 y, sobre todo, pásala bien, mi amor 💗. Te amo muchísimo, ¡qué ganas tengo de verte ya! 🥺"
    },
    "25":{
        question: "Cual de nuestros hijos nacio el 25 de diciembre?",
        options: ["Perrito y gatito","Gojo", "Los 3"],
        correctAnswer: "Los 3",
        responseMessageCorrect: "Y bueno, creo que la respuesta era obvia JAJAJAJ, ambos nacieron un 25 ya que fueron respectivos regalos de Navidad en su día :3, siendo perrito y gatito los hermanos mayores de mini Gojo. Y ahora, ¡FELIIIZZZZZ NAVIDAAAADDD, MI AMOOOORRRRR 🎅‼️! Espero que hayas tenido una gran Nochebuena y que hoy, en el día de Navidad, te llenen del amor y los regalos que te mereces :3. Ya sabes que a mí personalmente no me entusiasma demasiado este día, sin embargo, gracias a ti, cada año lo disfruto más. Y cuando por fin vivamos juntos, estoy seguro de que cada Navidad será mágica 💗. Por último, ya que hoy es el día de los regalos, tienes 2 opciones: decidir abrir tu regalo ahora, en lo cual lo que haría sería abrirlo por ti, grabarlo todo y enseñártelo, o si no, simplemente esperar a tu regreso :3. Ya me avisarás. Bueno, y así también concluye este calendario que hice para ti, espero que te haya sacado alguna sonrisa 💗. Te amo muchísimo 🥺.",
        responseMessageIncorrect: "Puede ser un poco tricky jeje"
    },
    "EXTRA":{
        question: "Me extrañas? 🥺",
        options: ["Si","No"],
        correctAnswer: ["Si"],
        responseMessageCorrect: "Entonces hazmelo saber :)",
        responseMessageIncorrect: "*NOTA: ESTA SECCIÓN FUE AÑADIDA POST-ROPTURA* Bueno, si estás viendo esto es porque al final decidiste echarle un vistazo a lo que estaba preparando en su día. Gracias por hacerlo. Pese a que ya no estemos juntos, espero que alguna sonrisa te haya sacado. Ojalá estés teniendo unas vacaciones maravillosas. Por obvios motivos, el proyecto no está completado. Las pistas de tu regalo pues nunca las pude añadir porque el plan era comprarlo en diciembre, antes de la primera pista, pero al final no se pudo, y varios días están vacíos. Melanie, realmente lamento mucho que no pudieras encontrar la felicidad que buscas junto a mí. No tienes ni idea de lo mucho que te he extrañado y lo mucho que me haces falta. Por si te lo llegas a preguntar, sí, pese a todo, aún te amo, tanto o más que antes, pero bueno, realmente no me corresponde estar diciendo esto, y mucho menos en un día como hoy. Si algún día deseas saber cómo me he sentido, en tu cuenta de TikTok de ysblf (donde tienes la foto de perfil de un gato) tienes alguna pista (si es que aún tienes acceso a esa cuenta). Pero bueno, Melanie, gracias por todo y por tomarte el tiempo de ver esto. ¡Acaba de disfrutar tus vacaciones!"
    }
    // Continue adding more days as needed
};

// show modal
// Function to show the modal with content
// Function to show the modal with dynamic content
function showModal(message, question = null, game = null) {
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = modal.querySelector('.close-btn');

    // Clear previous content
    modalContent.innerHTML = '';

    if (game) {
        // Handle game content based on day
        if (game.input) {
            const inputHTML = `
                <p>${game.question}</p>
                <label for="answer">Tu respuesta:</label>
                <input type="text" id="answer" name="answer">
                <button onclick="checkInputAnswer('${game.day}')">Enviar</button>
            `;
            modalContent.innerHTML = inputHTML;
        } else if (game.options) {
            const optionsWrapper = document.createElement('div');
            optionsWrapper.classList.add('option-buttons');

            const optionsHTML = game.options.map(option => 
                `<button onclick="checkChoiceAnswer('${game.day}', '${option}')">${option}</button>`
            ).join('');
            optionsWrapper.innerHTML = `<p>${game.question}</p>${optionsHTML}`;
            modalContent.appendChild(optionsWrapper);
        } else if (game.game === "tictactoe") {
            startTicTacToe(game.day);
        } else if(game.game == "minigame_day13"){
            startMiniGameDay13();
        } else {
            // Default case: just display the question and response
            modalContent.innerHTML = `<p>${game.question}</p><p>${game.responseMessage}</p>`;
        }
    } else {
        // Regular message display
        modalContent.innerHTML = `<p>${message}</p>`;
    }

    // Append close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.classList.add('close-btn');
    closeButton.onclick = () => {
        modal.style.display = 'none';
    };
    modalContent.appendChild(closeButton);

    // Show the modal
    modal.style.display = 'block';
}

// Function to display a mini-game
function showGame(day) {
    const game = games[day];

    // Pass the game data to showModal
    showModal(game.responseMessage || "", game.question, { ...game, day: day });
}

// Example of triggering the modal for the "extra" day
document.getElementById('extra-day').addEventListener('click', function() {
    showGame("EXTRA");
});

// General day logic (for regular days and games)
const days = document.querySelectorAll('.day');
days.forEach((day, index) => {
    day.addEventListener('click', () => {
        const dayNumber = index + 1;
        showGame(dayNumber);
    });
});

// Display the welcome message when the page loads
function showWelcomeMessage() {
    const welcomeMessage = "HOLAAAA MI NIÑAAAAAAA 🥺, MI AMOR 💗, MI ABEBE 🐥, MI LUZ ☀️, MI TOODOOO<br><br>Si estás viendo esto es porque ya es el primero de diciembre :3. Esto forma parte de tu regalo de Navidad. En esta ocasión quise ser más creativo, como no soy muy bueno con las manualidades (a diferencia de ti, que me has hecho tantos regalos hermosísimos 🎀, ¡que se noté ese arte de GCSE! 😩🙏), pues me puse a pensar en qué soy bueno, y bueno, estoy estudiando Computer Science por algo, jeje. Así que al final te he hecho un calendario de adviento virtual personalizado para ti :3. Este incluye varios minijuegos que irás viendo a lo largo de los días. La idea es que vayas abriendo el día correspondiente a cada uno. Entonces, hoy abrirías el día 1 y mañana el día 2.<br><br>Espero que te guste 🥺💗 y, obviamente, este solo es una parte de tu regalo de Navidad, el resto lo verás más tarde :3. Y bueno, creo que no me queda mucho más que decir, así que disfruta y ¡TE AMOOOOO 💗!<br><br>NOTA POST-RUPTURA: Como ya sabrás, el proyecto no está completado. Hay varios días vacíos e imágenes faltantes. Sin embargo, te recomendaría ir día por día para ver cuáles funcionan y cuáles no. También te recomendaría probar diferentes opciones/respuestas, ya que dependiendo de estas puede pasar una cosa u otra.";

    // Show the welcome message in the modal
    showModal(welcomeMessage);
}

// Trigger the welcome message on page load
window.onload = function() {
    showWelcomeMessage();
};


// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Example of triggering the game display





// Check input-based answer
function checkInputAnswer(day) {
    const inputAnswer = document.getElementById('answer').value;
    const game = games[day];
    if (game.correctAnswer.includes(inputAnswer)) {
        showModal(game.responseMessage);
    } else {
        showModal("Respuesta Incorrecta, intenta de nuevo.");
    }
}

// Check choice-based answer
function checkChoiceAnswer(day, chosenOption) {
    const game = games[day];

    // Handle if correctAnswer is an array (for multiple correct answers)
    if (Array.isArray(game.correctAnswer)) {
        if (game.correctAnswer.includes(chosenOption)) {
            showModal(game.responseMessageCorrect || game.responseMessage);
        } else {
            showModal(game.responseMessageIncorrect || "Respuesta Incorrecta.");
        }
    } else {
        // Normal case for single correct answer
        if (chosenOption === game.correctAnswer) {
            showModal(game.responseMessageCorrect || game.responseMessage);
        } else {
            showModal(game.responseMessageIncorrect || "Respuesta Incorrecta.");
        }
    }
}


// Tic-Tac-Toe Game Logic
let ticTacToeState = {
    board: [["", "", ""], ["", "", ""], ["", "", ""]],
    currentPlayer: "X", // User is "X", machine is "O"
    gameOver: false
};

function startTicTacToe(day) {
    const game = games[day];
    const modalContent = document.getElementById('modalContent');

    let ticTacToeState = {
        board: [["", "", ""], ["", "", ""], ["", "", ""]],
        currentPlayer: "X", // User is "X", machine is "O"
        gameOver: false
    };

    // Render the Tic-Tac-Toe board
    function renderBoard() {
        modalContent.innerHTML = ticTacToeState.board.map((row, rowIndex) => `
            <div class="tic-tac-toe-row">
                ${row.map((cell, colIndex) => `
                    <button class="tic-tac-toe-cell"
                            onclick="makeMove(${rowIndex}, ${colIndex})"
                            ${cell || ticTacToeState.gameOver ? 'disabled' : ''}>
                        ${cell}
                    </button>
                `).join('')}
            </div>
        `).join('');
    }

    // Define makeMove globally for user moves
    window.makeMove = function(row, col) {
        if (!ticTacToeState.board[row][col] && !ticTacToeState.gameOver) {
            ticTacToeState.board[row][col] = "X"; // User is always "X"
            renderBoard();
            if (checkWinner("X")) {
                ticTacToeState.gameOver = true;
                showModal(game.responseMessage); // Display the user's winning message for the current day
            } else if (ticTacToeState.board.flat().every(cell => cell !== "")) {
                ticTacToeState.gameOver = true;
                resetGameWithMessage("Empate. ¡Vuelve a intentarlo! 😔");
            } else {
                machineMove(); // Machine's turn
            }
        }
    };

    // Machine's move logic
    function machineMove() {
        if (ticTacToeState.gameOver) return;

        // Simple AI: Choose the first available cell
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (ticTacToeState.board[i][j] === "") {
                    ticTacToeState.board[i][j] = "O"; // Machine is always "O"
                    renderBoard();
                    if (checkWinner("O")) {
                        ticTacToeState.gameOver = true;
                        showModal("La máquina ganó. ¡Mejor suerte la próxima vez! 🤖");
                    } else if (ticTacToeState.board.flat().every(cell => cell !== "")) {
                        ticTacToeState.gameOver = true;
                        resetGameWithMessage("Empate. ¡Vuelve a intentarlo! 😔");
                    }
                    return;
                }
            }
        }
    }

    // Check for a winner
    function checkWinner(player) {
        const winningCombinations = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];
        return winningCombinations.some(combo =>
            combo.every(([x, y]) => ticTacToeState.board[x][y] === player)
        );
    }

    // Reset game state with a message
    function resetGameWithMessage(message) {
        setTimeout(() => {
            ticTacToeState.board = [["", "", ""], ["", "", ""], ["", "", ""]];
            ticTacToeState.gameOver = false;
            renderBoard();
            showModal(message);
        }, 1000); // Wait 1 second before resetting
    }

    // Render the initial board
    renderBoard();
}

function startMiniGameDay13() {
    const modalContent = document.getElementById('modalContent');
    let currentQuestion = 1; // Tracks the current question
    const correctAnswers = { 1: "3", 2: "3" }; // Correct answers
    const questions = {
        1: "A dia de hoy 13 de diciembre cuantos anyos llevamos juntos? (inserta tu respuesta como un digito e.g '5')",
        2: "Y cuantos meses?"
    };
    const successMessage = `
        CORREECTOOOO justo hoy cumplimos 3 años y 3 meses LA DOBLE 3😈🔥 BRRRR, 
        y espero que ese numero solo siga subiendo, subiendo y subiendo hasta llegar a viejitos :3 💗
        <br><br>
        <img src="Fotos/Foto13.jpg" style="width:50%;" alt="Special Day" class="response-image">
    `;

    // Render a question
    function renderQuestion() {
        modalContent.innerHTML = `
            <p>${questions[currentQuestion]}</p>
            <input type="text" id="answerInput" placeholder="Tu respuesta">
            <button id="submitAnswerButton">Enviar</button>
        `;

        document.getElementById('submitAnswerButton').addEventListener('click', handleAnswer);
    }

    // Handle user input and progress through questions
    function handleAnswer() {
        const userAnswer = document.getElementById('answerInput').value.trim();

        if (userAnswer === correctAnswers[currentQuestion]) {
            if (currentQuestion === 2) {
                // User answered both questions correctly
                showModal(successMessage);
            } else {
                // Move to the next question
                currentQuestion++;
                renderQuestion();
            }
        } else {
            // Incorrect answer
            showModal("Respuesta incorrecta. Inténtalo de nuevo. 🧐");
            renderQuestion(); // Re-render the current question
        }
    }

    // Start with the first question
    renderQuestion();
}

// Check for the 'extra' answer (whether it's 'Si' or 'No')
// Function to check the answer for the Extra Day



