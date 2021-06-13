// $(document).ready(function(){
//     $.ajax({
//         url: 'https://client.elevenscore.com/database/season_list',
//         headers: {
//             'content-type': 'application/json',
//             'X-Api-Key': '24578cdb-fc01-4794-9bb0-865dd8ac405c'
//         },
//         type: 'GET',
//         success: function (result){
//             console.log('result', result.data[0]);
//         },
//         error: function(error){
//             console.log(error);
//         }
//     })
// })

new Vue({
    el: "#app",
    data: {
        info: null
    },
    mounted() {
        axios
            .get('https://client.elevenscore.com/database/season_list', {
                headers: {
                    'content-type': 'application/json',
                    'X-Api-Key': '24578cdb-fc01-4794-9bb0-865dd8ac405c'
                }
            })
            .then(response => (
                this.info = response.data.data,
                console.log(response.data.data)
            ))
            .catch(error => console.log(error))
    },

});
