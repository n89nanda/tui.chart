/**
 * @fileoverview RaphaelMapLegend is graph renderer for map chart legend.
 * @author NHN Ent.
 *         FE Development Team <dl_javascript@nhnent.com>
 */

'use strict';


var Raphael = window.Raphael;

/**
 * @classdesc RaphaelMapLegend is graph renderer for map chart legend.
 * @class RaphaelMapLegend
 */
var RaphaelMapLegend = tui.util.defineClass(/** @lends RaphaelMapLegend.prototype */ {
    /**
     * Render function of pie chart.
     * @param {HTMLElement} container container
     * @param {{width: number, height: number}} dimension legend dimension
     * @param {MapChartColorModel} colorModel map chart color model
     * @return {object} paper raphael paper
     */
    render: function(container, dimension, colorModel) {
        var paper = Raphael(container, dimension.width, dimension.height),
            rect = paper.rect(5, 0, dimension.width - 5, dimension.height);

        rect.attr({
            fill: '270-' + colorModel.start + '-' + colorModel.end,
            stroke: 'none'
        });
        return paper;
    }
});

module.exports = RaphaelMapLegend;
