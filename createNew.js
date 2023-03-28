{
    let date = new Date();
    let tdates = document.getElementsByClassName("tdate");

    for (tdate of tdates) {
        tdate.value = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0];
    }
}
