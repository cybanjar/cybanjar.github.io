new Vue({
    el: '#q-app',
    data: function () {
        return {
            version: Quasar.version,
            brand: {
                primary: '#0dc7cf'
            },
        }
    },
    methods: {
        notify: function () {
            this.$q.notify('Running on Quasar v' + this.$q.version);
            console.log(this.$q.dark.mode)
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            console.log('mounted!')
        })
    }

});