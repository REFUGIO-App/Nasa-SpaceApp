'use client'; // Esta línea es necesaria para habilitar el uso de hooks de React

import { useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function Chart() {
  useEffect(() => {
    // Create root element
    let root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create chart
    let chart = root.container.children.push(am5radar.RadarChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "none",
      wheelY: "none",
      innerRadius: am5.percent(40)
    }));

    // Hide zoom-out button
    chart.zoomOutButton.set("forceHidden", true);

    // Create axes
    let xRenderer = am5radar.AxisRendererCircular.new(root, {
      minGridDistance: 30
    });
    xRenderer.grid.template.set("visible", false);

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.3,
      categoryField: "category",
      renderer: xRenderer
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      min: 0,
      renderer: am5radar.AxisRendererRadial.new(root, {})
    }));

    // Add series
    let series = chart.series.push(am5radar.RadarColumnSeries.new(root, {
      name: "Impacto",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      categoryXField: "category"
    }));

    // Set colors for columns
    series.columns.template.setAll({
      cornerRadius: 5,
      tooltipText: "{categoryX}: {valueY}",
      fill: am5.color("#39B54A"), // Default color
      stroke: am5.color("#CB6CE5") // Stroke color
    });

    // Set data
    let data = [
      { category: "Donaciones Recibidas", value: 2500 },
      { category: "Proyectos Completos", value: 15 },
      { category: "Beneficiarios Alcanzados", value: 500 },
      { category: "Voluntarios Activos", value: 30 },
      { category: "Donaciones Mensuales", value: 1200 },
      { category: "Proyectos en Curso", value: 5 }
    ];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Function to update data randomly and gradually
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
    let monthIndex = 0;

    setInterval(function () {
      if (monthIndex < months.length) {
        updateData(months[monthIndex]);
        monthIndex++;
      } else {
        monthIndex = 0; // Restart the cycle
      }
    }, 3000); // Update every 3 seconds for more gradual changes

    function updateData(month) {
      // Log the current month for reference
      console.log(`Actualizando datos para: ${month}`);

      am5.array.each(series.dataItems, function (dataItem) {
        let value = dataItem.get("valueY") + Math.round(Math.random() * 200 - 100); // Adjust range for gradual changes
        if (value < 0) {
          value = 10;
        }
        // Update values
        dataItem.set("valueY", value);
        dataItem.animate({
          key: "valueYWorking",
          to: value,
          duration: 600,
          easing: am5.ease.out(am5.ease.cubic)
        });
      });

      sortCategoryAxis();
    }

    // Axis sorting
    function sortCategoryAxis() {
      series.dataItems.sort(function (x, y) {
        return y.get("valueY") - x.get("valueY"); // descending
      });

      am5.array.each(xAxis.dataItems, function (dataItem) {
        let seriesDataItem = getSeriesItem(dataItem.get("category"));

        if (seriesDataItem) {
          let index = series.dataItems.indexOf(seriesDataItem);
          let deltaPosition = (index - dataItem.get("index", 0)) / series.dataItems.length;
          dataItem.set("index", index);
          dataItem.set("deltaPosition", -deltaPosition);
          dataItem.animate({
            key: "deltaPosition",
            to: 0,
            duration: 1000,
            easing: am5.ease.out(am5.ease.cubic)
          });
        }
      });

      xAxis.dataItems.sort(function (x, y) {
        return x.get("index") - y.get("index");
      });
    }

    function getSeriesItem(category) {
      for (let i = 0; i < series.dataItems.length; i++) {
        let dataItem = series.dataItems[i];
        if (dataItem.get("categoryX") === category) {
          return dataItem;
        }
      }
    }

    // Make stuff animate on load
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "480px", fontFamily: 'Montserrat' }}></div>;
}
