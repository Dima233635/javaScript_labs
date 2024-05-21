document.addEventListener("DOMContentLoaded", function() {
    const priceInput = document.querySelector("#priceInput");

    priceInput.addEventListener("focus", function() {
        console.log("FOCUS")
        
        priceInput.style.borderColor = "green"

        const spanError = priceInput.parentElement.lastElementChild
        if (spanError && spanError.classList.contains("error-span")) {
            spanError.remove()
        }

    });

    priceInput.addEventListener("blur", function() {
        const price = parseFloat(priceInput.value);

        console.log("BLUR")

        const spanError = priceInput.nextElementSibling

        if (isNaN(price) || price < 0) {
            priceInput.style.borderColor = "red";

            if (!spanError) {
                const spanError = document.createElement("span");
                spanError.classList.add("error-span");
                spanError.textContent = "Please enter correct price";
                priceInput.parentElement.append(spanError);
            }

            return;
        }

        
        if (spanError) {
            spanError.remove()
        }

        priceInput.style.borderColor = "";

        const span = document.createElement("span");
        span.textContent = `Текущая цена: ${priceInput.value}`;
        
        const closeButton = document.createElement("button");
        closeButton.textContent = "X";

        closeButton.addEventListener("click", function() {
            span.remove();
        });

        span.append(closeButton);


        document.body.append(span);

        priceInput.value = ""
    });
});










































