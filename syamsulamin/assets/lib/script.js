new Vue({
    el: '#q-app',
    data: function () {
        return {
            name: 'Syamsul Amin'
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