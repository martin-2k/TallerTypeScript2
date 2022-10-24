import { series } from "./data.js";
var infoSerie = document.getElementById("cardinfo");
var seriesTable = document.getElementById('series');
var avgTemporadasTable = document.getElementById('avgTemporadas');
mostrarSeries(series);
DarPromedioTemporadas(series);
function DarPromedioTemporadas(series) {
    var avgTemporadas = 0;
    var trElement = document.createElement("tr");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        avgTemporadas += serie.Seasons;
    }
    avgTemporadas = avgTemporadas / series.length;
    trElement.innerHTML = "<td><b>Seasons average:</b></td><td><b>".concat(avgTemporadas, "</b></td>");
    avgTemporadasTable.appendChild(trElement);
}
function mostrarSeries(series) {
    var seriesTBody = document.createElement('tbody');
    var _loop_1 = function (serie) {
        var trElement = document.createElement('tr');
        trElement.innerHTML =
            "\n        <td>".concat(serie.numero, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.Channel, "</td>\n        <td>").concat(serie.Seasons, "</td>\n        ");
        seriesTBody.appendChild(trElement);
        trElement.onclick = function () {
            desplegarInfoSerie(serie.numero, series);
            return false;
        };
    };
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(seriesTBody);
}
function desplegarInfoSerie(numSerie, series) {
    var serie = null;
    series.forEach(function (s) {
        if (s.numero == numSerie) {
            serie = s;
        }
    });
    console.log("".concat(serie.image));
    infoSerie.innerHTML = "<img class=\"card-img-top\" src=\"".concat(serie.image, "\" alt=\"imagen ").concat(serie.name, "\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                                    <p class=\"card-text\">").concat(serie.plot, "</p>\n                                    <a href=\"").concat(serie.link, "\" target=\"_blank\" rel=\"noopener\">").concat(serie.link, "</a>\n                                </div>");
}
