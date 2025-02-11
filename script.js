let timer;
        let startTime;
        let elapsedTime = 0;
        let maxTime = 120; // Max time (2 minutes)

        function startTimer() {
            if (timer) return; // Prevent multiple starts

            startTime = new Date().getTime();
            elapsedTime = 0;
            document.getElementById("progressBar").style.width = "0%";
            document.getElementById("progressBar").style.background = "red";
            document.getElementById("result").innerHTML = "";

            timer = setInterval(() => {
                let now = new Date().getTime();
                elapsedTime = (now - startTime) / 1000; // Convert ms to seconds

                if (elapsedTime >= maxTime) {
                    stopTimer();
                }

                updateBar(elapsedTime);
            }, 100);
        }

        function stopTimer() {
            clearInterval(timer);
            timer = null;
            showResult(elapsedTime);
        }

        function updateBar(time) {
            let percentage = (time / maxTime) * 100;
            document.getElementById("progressBar").style.width = percentage + "%";

            if (time < 30) {
                document.getElementById("progressBar").style.background = "red";
            } else if (time < 60) {
                document.getElementById("progressBar").style.background = "orange";
            } else {
                document.getElementById("progressBar").style.background = "green";
            }
        }

        function showResult(time) {
            let resultText = "";
            let color = "";

            if (time < 30) {
                resultText = `❌ Poor: You held your breath for ${time.toFixed(1)} seconds. Try deep breathing exercises.`;
                color = "red";
            } else if (time >= 30 && time < 60) {
                resultText = `🟠 Good: You held your breath for ${time.toFixed(1)} seconds. Regular exercise can improve lung capacity.`;
                color = "orange";
            } else {
                resultText = `✅ Excellent: You held your breath for ${time.toFixed(1)} seconds. Great lung health!`;
                color = "green";
            }

            let resultDiv = document.getElementById("result");
            resultDiv.innerHTML = resultText;
            resultDiv.style.color = color;
        }
    
