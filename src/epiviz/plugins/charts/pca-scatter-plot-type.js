/**
 * Created by Florin Chelaru ( florinc [at] umd [dot] edu )
 * Date: 11/14/13
 * Time: 11:55 PM
 */

goog.provide('epiviz.plugins.charts.PCAScatterPlotType');

// goog.require('epiviz.plugins.charts.FeatureScatterPlot');
goog.require('epiviz.ui.charts.PlotType');
goog.require('epiviz.measurements.Measurement.Type');
goog.require('epiviz.ui.charts.CustomSetting');
goog.require('epiviz.ui.charts.Visualization');

/**
 * @param {epiviz.Config} config
 * @extends {epiviz.ui.charts.PlotType}
 * @constructor
 */
epiviz.plugins.charts.PCAScatterPlotType = function(config) {
  // Call superclass constructor
  epiviz.ui.charts.PlotType.call(this, config);
};

/*
 * Copy methods from upper class
 */
epiviz.plugins.charts.PCAScatterPlotType.prototype = epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);
epiviz.plugins.charts.PCAScatterPlotType.constructor = epiviz.plugins.charts.PCAScatterPlotType;

/**
 * @param {string} id
 * @param {jQuery} container The div where the chart will be drawn
 * @param {epiviz.ui.charts.VisualizationProperties} properties
 * @returns {epiviz.plugins.charts.ScatterPlot}
 */
epiviz.plugins.charts.PCAScatterPlotType.prototype.createNew = function(id, container, properties) {
  return new epiviz.plugins.charts.PCAScatterPlot(id, container, properties);
};

/**
 * @returns {string}
 */
epiviz.plugins.charts.PCAScatterPlotType.prototype.typeName = function() {
  return 'epiviz.plugins.charts.PCAScatterPlot';
};

/**
 * @returns {string}
 */
epiviz.plugins.charts.PCAScatterPlotType.prototype.chartName = function() {
  return 'PCA Scatter Plot';
};

/**
 * @returns {string}
 */
epiviz.plugins.charts.PCAScatterPlotType.prototype.chartHtmlAttributeName = function() {
  return 'pca_scatter';
};

/**
 * @returns {function(epiviz.measurements.Measurement): boolean}
 */
epiviz.plugins.charts.PCAScatterPlotType.prototype.measurementsFilter = function() { return function(m) { return epiviz.measurements.Measurement.Type.hasValues(m.type()); }; };

/**
 * If true, this flag indicates that the corresponding chart can only show measurements that belong to the same
 * data source group
 * @returns {boolean}
 */
epiviz.plugins.charts.PCAScatterPlotType.prototype.isRestrictedToSameDatasourceGroup = function() { return true; };

/**
 * Gets the minimum number of measurements that must be selected for the chart to be displayed
 * @returns {number}
 */
epiviz.plugins.charts.PCAScatterPlotType.prototype.minSelectedMeasurements = function() { return 2; };

/**
 * @returns {Array.<epiviz.ui.charts.CustomSetting>}
 */
epiviz.plugins.charts.PCAScatterPlotType.prototype.customSettingsDefs = function() {
  return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([
    new epiviz.ui.charts.CustomSetting(
      epiviz.plugins.charts.PCAScatterPlotType.CustomSettings.CIRCLE_RADIUS_RATIO,
      epiviz.ui.charts.CustomSetting.Type.NUMBER,
      0.015,
      'Circle radius ratio'),

    new epiviz.ui.charts.CustomSetting(
      epiviz.ui.charts.Visualization.CustomSettings.X_MIN,
      epiviz.ui.charts.CustomSetting.Type.NUMBER,
      epiviz.ui.charts.CustomSetting.DEFAULT,
      'Min X'),

    new epiviz.ui.charts.CustomSetting(
      epiviz.ui.charts.Visualization.CustomSettings.X_MAX,
      epiviz.ui.charts.CustomSetting.Type.NUMBER,
      epiviz.ui.charts.CustomSetting.DEFAULT,
      'Max X'),

    new epiviz.ui.charts.CustomSetting(
      epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,
      epiviz.ui.charts.CustomSetting.Type.NUMBER,
      epiviz.ui.charts.CustomSetting.DEFAULT,
      'Min Y'),

    new epiviz.ui.charts.CustomSetting(
      epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,
      epiviz.ui.charts.CustomSetting.Type.NUMBER,
      epiviz.ui.charts.CustomSetting.DEFAULT,
      'Max Y'),

    new epiviz.ui.charts.CustomSetting(
      epiviz.plugins.charts.PCAScatterPlotType.CustomSettings.COLOR_BY,
      epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,
      'name',
      'Color By'),

    new epiviz.ui.charts.CustomSetting(
      epiviz.plugins.charts.PCAScatterPlotType.CustomSettings.AB_LINE,
      epiviz.ui.charts.CustomSetting.Type.STRING,
      epiviz.ui.charts.CustomSetting.DEFAULT,
      'Draw Abline')
  ]);
};

/**
 * @enum {string}
 */
epiviz.plugins.charts.PCAScatterPlotType.CustomSettings = {
  CIRCLE_RADIUS_RATIO: 'circleRadiusRatio',
  COLOR_BY: 'colorBy',
  AB_LINE: 'abLine'
};

// goog.inherits(epiviz.plugins.charts.CustomScatterPlotType, epiviz.ui.charts.PlotType);
