function DivAlert(message, alert) {
    return (`
        <div class="d-inline-flex p-2 justify-content-center">
            <span class="alert ${alert}" role="alert">
                ${message}
            </span>
        </div>
    `);
}

module.exports = DivAlert;
