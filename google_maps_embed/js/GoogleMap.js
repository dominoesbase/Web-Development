/*******************************************************************************
 *  Contributors:
 *     Jorge V. Rodrigues - implementation
 *
 *  Last revision: 2019/03
 ******************************************************************************/
function startMap() {
    var latLngPre = new google.maps.LatLng(mapsInfo[0], mapsInfo[1]);
    var mapOptions = {
        zoom: mapsInfo[7],
        center: latLngPre,
        disableDefaultUI: mapsInfo[4]
    }

    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    overlay = new CustomMarker(
        latLngPre,
        map, {
            marker_id: '0'
        }
    );
}

function CustomMarker(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
    var self = this;
    var div = this.div;

    if (!div) {
        div = this.div = document.createElement('div');
        div.className = 'marker';
        div.style.position = 'relative';
        div.style.cursor = 'pointer';
        div.style.width = mapsInfo[5];
        div.style.height = mapsInfo[6];
        div.style.background = mapsInfo[2];

        if (typeof(self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        }

        google.maps.event.addDomListener(div, "click", function(event) {
            alert(mapsInfo[3]);
            google.maps.event.trigger(self, "click");
        });

        var pan = this.getPanes();
        pan.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    // set the position of the pin image.
    if (point) {
        div.style.left = (point.x - 10) + 'px';
        div.style.top = (point.y - 15) + 'px';
    }
};

CustomMarker.prototype.remove = function() {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};

CustomMarker.prototype.getPosition = function() {
    return this.latlng;
};

google.maps.event.addDomListener(window, 'load', startMap);
