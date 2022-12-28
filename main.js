var map = document.querySelector('#map')
var paths = map.querySelectorAll('.map__image a')

var activeArea = function (id) {
    
    map.querySelectorAll('.is-active').forEach(function (item) {
        item.classList.remove('is-active')
    
    })
    
    document.querySelector('#region-' + id).classList.add('is-active')
}


paths.forEach(function (path) {
    path.addEventListener('mouseenter', function (e) {
        var id = this.id.replace('region-','')
        activeArea(id)
    }) 
})
