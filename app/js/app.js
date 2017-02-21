function returnSynonym(word) {

    var url = "https://wordsapiv1.p.mashape.com/words/" + word;


    // Request (7) (GET https://wordsapiv1.p.mashape.com/words/bump)

    jQuery.ajax({
        url: url,
        type: "GET",
        headers: {
            "X-Mashape-Key": "jsKB4aS7kZmshIOvy5YnKfD20Lxip1Q4sLujsn0sEOtDQh44FQ",
            "Accept": "application/json",
        },
    })
        .done(function(data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data["results"][0]["synonyms"][0]);
            return data["results"][0]["synonyms"][0];
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function() {
            /* ... */
        });


}


var app = new Vue({

    el: '#app',
    data: {
        input: "",
        output: "",
        newArr: []

    },
    methods: {
        jiggle: function() {

            var arr = this.input.split(" ");
            for(var i = 0; i <= arr.length-1; i++) {
                var word = returnSynonym(arr[i]);
                console.log(word);
                this.newArr.push(word);
                //newArr.append(word);


            }

            for(var i = 0; i <= newArr.length; i++) {
                console.log(newArr[i]);

            }


        }

    }

});
