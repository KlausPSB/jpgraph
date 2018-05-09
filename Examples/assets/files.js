var files_arr = [
    'examples_axis/axislabelbkgex01.php',
    'examples_axis/axislabelbkgex02.php',
    'examples_axis/axislabelbkgex03.php',
    'examples_axis/axislabelbkgex04.php',
    'examples_axis/axislabelbkgex05.php',
    'examples_axis/axislabelbkgex06.php',
    'examples_axis/axislabelbkgex07.php',
    'examples_axis/dupyaxisex1.php',
    'examples_axis/inyaxisex1.php',
    'examples_axis/inyaxisex2.php',
    'examples_axis/inyaxisex3.php',
    'examples_axis/mulyaxisex1.php',
    'examples_axis/topxaxisex1.php',
    'examples_background/background_type_ex0.php',
    'examples_background/background_type_ex1.php',
    'examples_background/background_type_ex2.php',
    'examples_background/background_type_ex3.php',
    'examples_background/background_type_ex4.php',
    'examples_background/backgroundex01.php',
    'examples_background/backgroundex02.php',
    'examples_background/backgroundex03.php',
    'examples_bar/accbarex1.php',
    'examples_bar/accbarframeex01.php',
    'examples_bar/accbarframeex02.php',
    'examples_bar/accbarframeex03.php',
    'examples_bar/alphabarex1.php',
    'examples_bar/bar2scalesex1.php',
    'examples_bar/barformatcallbackex1.php',
    'examples_bar/bargradex1.php',
    'examples_bar/bargradex2.php',
    'examples_bar/bargradex3.php',
    'examples_bar/bargradex4.php',
    'examples_bar/bargradex5.php',
    'examples_bar/bargradex6.php',
    'examples_bar/bargradsmallex1.php',
    'examples_bar/bargradsmallex2.php',
    'examples_bar/bargradsmallex3.php',
    'examples_bar/bargradsmallex4.php',
    'examples_bar/bargradsmallex5.php',
    'examples_bar/bargradsmallex6.php',
    'examples_bar/bargradsmallex7.php',
    'examples_bar/bargradsmallex8.php',
    'examples_bar/barimgex1.php',
    'examples_bar/barintex1.php',
    'examples_bar/barintex2.php',
    'examples_bar/barlinealphaex1.php',
    'examples_bar/barlinefreqex1.php',
    'examples_bar/barpatternex1.php',
    'examples_bar/barscalecallbackex1.php',
    'examples_bar/bartutex1.php',
    'examples_bar/bartutex12.php',
    'examples_bar/bartutex2.php',
    'examples_bar/bartutex3.php',
    'examples_bar/bartutex4.php',
    'examples_bar/bartutex5.php',
    'examples_bar/bartutex6.php',
    'examples_bar/grace_ex0.php',
    'examples_bar/grace_ex1.php',
    'examples_bar/grace_ex2.php',
    'examples_bar/grace_ex3.php',
    'examples_bar/groupbarex1.php',
    'examples_bar/horizbarex1.php',
    'examples_bar/horizbarex2.php',
    'examples_bar/horizbarex3.php',
    'examples_bar/horizbarex4.php',
    'examples_bar/horizbarex6.php',
    'examples_bar/logbarex1.php',
    'examples_bar/manual_textscale_ex1.php',
    'examples_bar/manual_textscale_ex2.php',
    'examples_bar/manual_textscale_ex3.php',
    'examples_bar/manual_textscale_ex4.php',
    'examples_bar/negbarvalueex01.php',
    'examples_bar/new_bar1.php',
    'examples_bar/new_bar3.php',
    'examples_bar/new_bar4.php',
    'examples_bar/new_bar6.php',
    'examples_bar/plotbanddensity_ex0.php',
    'examples_bar/plotbanddensity_ex1.php',
    'examples_bar/plotbanddensity_ex2.php',
    'examples_canvas/canvas_jpgarchex.php',
    'examples_canvas/canvasbezierex1.php',
    'examples_canvas/canvasex01.php',
    'examples_canvas/canvasex02.php',
    'examples_canvas/canvasex03.php',
    'examples_canvas/canvasex04.php',
    'examples_canvas/canvasex05.php',
    'examples_canvas/canvasex06.php',
    'examples_canvas/canvaspiralex1.php',
    'examples_canvas/colormaps.php',
    'examples_canvas/listfontsex1.php',
    'examples_canvas/mkgrad.php',
    'examples_canvas/text-example1.php',
    'examples_canvas/text-example2.php',
    'examples_canvas/textalignex1.php',
    'examples_canvas/textpalignex1.php',
    'examples_contour/basic_contourex01.php',
    'examples_contour/basic_contourex02.php',
    'examples_contour/basic_contourex03-1.php',
    'examples_contour/basic_contourex03-2.php',
    'examples_contour/basic_contourex03-3.php',
    'examples_contour/basic_contourex04.php',
    'examples_contour/basic_contourex05.php',
    'examples_contour/contour2_ex1.php',
    'examples_contour/contour2_ex2.php',
    'examples_contour/contour2_ex3.php',
    'examples_contour/contour2_ex4.php',
    'examples_contour/contour2_ex5.php',
    'examples_contour/contour2_ex6.php',
    'examples_contour/contour2_ex7.php',
    'examples_contour/contourex01.php',
    'examples_contour/contourex02.php',
    'examples_contour/contourex03.php',
    'examples_contour/contourex04.php',
    'examples_contour/contourex05.php',
    'examples_csim/bar_csimex1.php',
    'examples_csim/bar_csimex2.php',
    'examples_csim/bar_csimex3.php',
    'examples_csim/barcsim_details_omit.php',
    'examples_csim/barcsim_popup.php',
    'examples_csim/barline_csimex1.php',
    'examples_csim/barlinefreq_csimex1.php',
    'examples_csim/boxstockcsimex1.php',
    'examples_csim/csim_in_html_ex1.php',
    'examples_csim/csim_in_html_ex2.php',
    'examples_csim/csim_in_html_graph_ex1.php',
    'examples_csim/csim_in_html_graph_ex2.php',
    'examples_csim/ganttcsimex01.php',
    'examples_csim/ganttcsimex02.php',
    'examples_csim/imgmarkercsimex1.php',
    'examples_csim/matrix_csimex01.php',
    'examples_csim/mulyaxiscsimex1.php',
    'examples_csim/pie3d_csimex1.php',
    'examples_csim/pie_csimex1.php',
    'examples_csim/piec_csimex1.php',
    'examples_csim/polar_csimex1.php',
    'examples_csim/radar_csimex1.php',
    'examples_csim/scatter_csimex1.php',
    'examples_csim/tablebarex1_csim.php',
    'examples_csim/tableex01_csim.php',
    'examples_csim/titlecsimex01.php',
    'examples_datamatrix/datamatrix_ex0.php',
    'examples_datamatrix/datamatrix_ex00.php',
    'examples_datamatrix/datamatrix_ex1.php',
    'examples_datamatrix/datamatrix_ex2.php',
    'examples_datamatrix/datamatrix_ex3.php',
    'examples_datamatrix/datamatrix_ex4.php',
    'examples_datamatrix/datamatrix_ex5.php',
    'examples_datamatrix/datamatrix_ex6.php',
    'examples_datamatrix/datamatrix_ex7.php',
    'examples_date/dateaxisex1.php',
    'examples_date/dateaxisex2.php',
    'examples_date/dateaxisex3.php',
    'examples_date/dateaxisex4.php',
    'examples_date/datescaleticksex01.php',
    'examples_date/dateutilex01.php',
    'examples_date/dateutilex02.php',
    'examples_date/prepaccdata_example.php',
    'examples_gantt/gantt_samerowex1.php',
    'examples_gantt/gantt_samerowex2.php',
    'examples_gantt/gantt_textex1.php',
    'examples_gantt/ganttcolumnfontsex01.php',
    'examples_gantt/ganttconstrainex0.php',
    'examples_gantt/ganttconstrainex1.php',
    'examples_gantt/ganttconstrainex2.php',
    'examples_gantt/ganttex00.php',
    'examples_gantt/ganttex01.php',
    'examples_gantt/ganttex02.php',
    'examples_gantt/ganttex03.php',
    'examples_gantt/ganttex04.php',
    'examples_gantt/ganttex05.php',
    'examples_gantt/ganttex06.php',
    'examples_gantt/ganttex07.php',
    'examples_gantt/ganttex08.php',
    'examples_gantt/ganttex09.php',
    'examples_gantt/ganttex10.php',
    'examples_gantt/ganttex11.php',
    'examples_gantt/ganttex12.php',
    'examples_gantt/ganttex13-zoom1.php',
    'examples_gantt/ganttex13-zoom2.php',
    'examples_gantt/ganttex13.php',
    'examples_gantt/ganttex14.php',
    'examples_gantt/ganttex15.php',
    'examples_gantt/ganttex16.php',
    'examples_gantt/ganttex17-flag.php',
    'examples_gantt/ganttex17.php',
    'examples_gantt/ganttex18.php',
    'examples_gantt/ganttex19.php',
    'examples_gantt/ganttex30.php',
    'examples_gantt/ganttex_slice.php',
    'examples_gantt/gantthgridex1.php',
    'examples_gantt/gantthourex1.php',
    'examples_gantt/gantthourminex1.php',
    'examples_gantt/gantticonex1.php',
    'examples_gantt/ganttmonthyearex1.php',
    'examples_gantt/ganttmonthyearex2.php',
    'examples_gantt/ganttmonthyearex3.php',
    'examples_gantt/ganttmonthyearex4.php',
    'examples_gantt/ganttsimpleex1.php',
    'examples_gantt/multconstganttex01.php',
    'examples_general/example0-0.php',
    'examples_general/example0.php',
    'examples_general/example1.1.php',
    'examples_general/example1.2.php',
    'examples_general/example1.php',
    'examples_general/example10.php',
    'examples_general/example11.php',
    'examples_general/example13.php',
    'examples_general/example14.php',
    'examples_general/example15.php',
    'examples_general/example16.1.php',
    'examples_general/example16.2.php',
    'examples_general/example16.3.php',
    'examples_general/example16.4.php',
    'examples_general/example16.5.php',
    'examples_general/example16.6.php',
    'examples_general/example16.php',
    'examples_general/example17.php',
    'examples_general/example18.php',
    'examples_general/example19.1.php',
    'examples_general/example19.php',
    'examples_general/example2.1.php',
    'examples_general/example2.5.php',
    'examples_general/example2.6.php',
    'examples_general/example2.php',
    'examples_general/example20.1.php',
    'examples_general/example20.2.php',
    'examples_general/example20.3.php',
    'examples_general/example20.4.php',
    'examples_general/example20.5.php',
    'examples_general/example20.php',
    'examples_general/example21.php',
    'examples_general/example22.php',
    'examples_general/example23.php',
    'examples_general/example24.php',
    'examples_general/example25.1.php',
    'examples_general/example25.2.php',
    'examples_general/example25.php',
    'examples_general/example26.1.php',
    'examples_general/example26.php',
    'examples_general/example27.1.php',
    'examples_general/example27.2.php',
    'examples_general/example27.3.php',
    'examples_general/example27.php',
    'examples_general/example28.1.php',
    'examples_general/example28.2.php',
    'examples_general/example28.3.php',
    'examples_general/example28.php',
    'examples_general/example3.0.1.php',
    'examples_general/example3.0.2.php',
    'examples_general/example3.0.3.php',
    'examples_general/example3.1.1.php',
    'examples_general/example3.1.php',
    'examples_general/example3.2.1.php',
    'examples_general/example3.2.2.php',
    'examples_general/example3.2.php',
    'examples_general/example3.3.php',
    'examples_general/example3.4.1.php',
    'examples_general/example3.4.php',
    'examples_general/example3.php',
    'examples_general/example4.php',
    'examples_general/example5.1.php',
    'examples_general/example5.php',
    'examples_general/example6.1.php',
    'examples_general/example6.2.php',
    'examples_general/example6.php',
    'examples_general/example7.php',
    'examples_general/example8.1.php',
    'examples_general/example8.php',
    'examples_general/example9.1.php',
    'examples_general/example9.2.php',
    'examples_general/example9.php',
    'examples_general/exampleex9.php',
    'examples_img/bkgimgflagex1.php',
    'examples_img/bkgimgflagex2.php',
    'examples_img/bkgimgflagex3.php',
    'examples_img/bkgimgflagex4.php',
    'examples_img/bkgimgflagex5.php',
    'examples_img/imgmarkerex1.php',
    'examples_led/ledex1.php',
    'examples_led/ledex10.php',
    'examples_led/ledex11.php',
    'examples_led/ledex12.php',
    'examples_led/ledex13.php',
    'examples_led/ledex14.php',
    'examples_led/ledex15.php',
    'examples_led/ledex16.php',
    'examples_led/ledex17.php',
    'examples_led/ledex2.php',
    'examples_led/ledex3.php',
    'examples_led/ledex4.1.php',
    'examples_led/ledex4.2.php',
    'examples_led/ledex4.php',
    'examples_led/ledex5.php',
    'examples_led/ledex6.php',
    'examples_led/ledex7.php',
    'examples_led/ledex8.php',
    'examples_led/ledex9.php',
    'examples_led/ledex_cyrillic.php',
    'examples_led/ledex_cyrillic2.php',
    'examples_line/builtinplotmarksex1.php',
    'examples_line/centeredlineex01.php',
    'examples_line/centeredlineex02.php',
    'examples_line/centeredlineex03.php',
    'examples_line/centerlinebarex1.php',
    'examples_line/clipping_ex1.php',
    'examples_line/clipping_ex2.php',
    'examples_line/filledgridex1.php',
    'examples_line/filledline01.php',
    'examples_line/filledlineex01.1.php',
    'examples_line/filledlineex01.php',
    'examples_line/filledlineex02.php',
    'examples_line/filledlineex03.php',
    'examples_line/filledstepstyleex1.php',
    'examples_line/funcex1.php',
    'examples_line/funcex2.php',
    'examples_line/funcex3.php',
    'examples_line/funcex4.php',
    'examples_line/gradlinefillex1.php',
    'examples_line/gradlinefillex2.php',
    'examples_line/gradlinefillex3.php',
    'examples_line/gradlinefillex4.php',
    'examples_line/interpolation-growth-log.php',
    'examples_line/interpolation-growth.php',
    'examples_line/linebarcentex1.php',
    'examples_line/linebarex1.php',
    'examples_line/linebarex2.php',
    'examples_line/linebarex3.php',
    'examples_line/linegraceex.php',
    'examples_line/lineiconex1.php',
    'examples_line/lineiconex2.php',
    'examples_line/lineimagefillex1.php',
    'examples_line/manscaleex1.php',
    'examples_line/manscaleex2.php',
    'examples_line/manscaleex3.php',
    'examples_line/manscaleex4.php',
    'examples_line/new_line1.php',
    'examples_line/new_line2.php',
    'examples_line/new_line3.php',
    'examples_line/new_line4.php',
    'examples_line/new_line5.php',
    'examples_line/new_step1.php',
    'examples_line/nullvalueex01.php',
    'examples_line/partiallyfilledlineex1.php',
    'examples_line/plotlineex1.php',
    'examples_line/splineex1.php',
    'examples_line/staticlinebarex1.php',
    'examples_line/tabtitleex1.php',
    'examples_line/timestampex01.php',
    'examples_line/titleex1.php',
    'examples_line/y2synch.php',
    'examples_line/y2synch2.php',
    'examples_matrix/matrix_edgeex01.php',
    'examples_matrix/matrix_edgeex02.php',
    'examples_matrix/matrix_ex0.php',
    'examples_matrix/matrix_ex01.php',
    'examples_matrix/matrix_ex02.php',
    'examples_matrix/matrix_ex03.php',
    'examples_matrix/matrix_ex04.1.php',
    'examples_matrix/matrix_ex04.2.php',
    'examples_matrix/matrix_ex04.php',
    'examples_matrix/matrix_ex05.php',
    'examples_matrix/matrix_ex06.php',
    'examples_matrix/matrix_introex.php',
    'examples_matrix/matrix_layout_ex1.php',
    'examples_matrix/matrixex00.php',
    'examples_multigraph/comb90dategraphex01.php',
    'examples_multigraph/comb90dategraphex02.php',
    'examples_multigraph/comb90dategraphex03.php',
    'examples_multigraph/combgraphex1.php',
    'examples_multigraph/combgraphex2.php',
    'examples_odometer/odoex00.php',
    'examples_odometer/odoex01.php',
    'examples_odometer/odoex010.php',
    'examples_odometer/odoex011.php',
    'examples_odometer/odoex012.php',
    'examples_odometer/odoex02.php',
    'examples_odometer/odoex03.php',
    'examples_odometer/odoex04.php',
    'examples_odometer/odoex05.php',
    'examples_odometer/odoex06.php',
    'examples_odometer/odoex07.php',
    'examples_odometer/odoex08.php',
    'examples_odometer/odoex09.php',
    'examples_odometer/odotutex00.php',
    'examples_odometer/odotutex01.php',
    'examples_odometer/odotutex02.php',
    'examples_odometer/odotutex03.php',
    'examples_odometer/odotutex04.php',
    'examples_odometer/odotutex06.php',
    'examples_odometer/odotutex07.php',
    'examples_odometer/odotutex08.1.php',
    'examples_odometer/odotutex08.php',
    'examples_odometer/odotutex09.php',
    'examples_odometer/odotutex10.php',
    'examples_odometer/odotutex11.php',
    'examples_odometer/odotutex12.php',
    'examples_odometer/odotutex13.php',
    'examples_odometer/odotutex14.php',
    'examples_odometer/odotutex15.php',
    'examples_odometer/odotutex16.1.php',
    'examples_odometer/odotutex16.php',
    'examples_odometer/odotutex17.php',
    'examples_odometer/odotutex18.php',
    'examples_odometer/odotutex19.php',
    'examples_other/antispamex01.php',
    'examples_other/linlogex1.php',
    'examples_pdf/pdf417_ex0.php',
    'examples_pdf/pdf417_ex1.php',
    'examples_pdf/pdf417_ex1b.php',
    'examples_pdf/pdf417_ex1c.php',
    'examples_pdf/pdf417_ex2.php',
    'examples_pdf/pdf417_ex3.php',
    'examples_pdf/pdf417_ex4.php',
    'examples_pdf/pdf417_ex5.php',
    'examples_pdf/pdf417_ex6.php',
    'examples_pie/new_pie1.php',
    'examples_pie/new_pie2.php',
    'examples_pie/new_pie3.php',
    'examples_pie/new_pie4.php',
    'examples_pie/pie3dex1.php',
    'examples_pie/pie3dex2.php',
    'examples_pie/pie3dex3.php',
    'examples_pie/pie3dex4.php',
    'examples_pie/pie3dex5.php',
    'examples_pie/piebkgex1.php',
    'examples_pie/piecex1.php',
    'examples_pie/piecex2.php',
    'examples_pie/pieex1.php',
    'examples_pie/pieex2.php',
    'examples_pie/pieex3.php',
    'examples_pie/pieex4.php',
    'examples_pie/pieex5.php',
    'examples_pie/pieex6.php',
    'examples_pie/pieex7.php',
    'examples_pie/pieex8.php',
    'examples_pie/pieex9.php',
    'examples_pie/pielabelsex1.php',
    'examples_pie/pielabelsex2.php',
    'examples_pie/pielabelsex3.php',
    'examples_pie/pielabelsex4.php',
    'examples_pie/pielabelsex5.php',
    'examples_polar/polarclockex1.php',
    'examples_polar/polarclockex2.php',
    'examples_polar/polarex0-180.php',
    'examples_polar/polarex0.php',
    'examples_polar/polarex1.php',
    'examples_polar/polarex10.php',
    'examples_polar/polarex2.php',
    'examples_polar/polarex3-lin.php',
    'examples_polar/polarex3.php',
    'examples_polar/polarex4.php',
    'examples_polar/polarex5.php',
    'examples_polar/polarex6.php',
    'examples_polar/polarex7-1.php',
    'examples_polar/polarex7-2.php',
    'examples_polar/polarex7.php',
    'examples_polar/polarex8.php',
    'examples_polar/polarex9.php',
    'examples_qr/qr_template.php',
    'examples_qr/qrexample0.php',
    'examples_qr/qrexample00.php',
    'examples_qr/qrexample01.php',
    'examples_qr/qrexample02.php',
    'examples_qr/qrexample03.php',
    'examples_qr/qrexample04.php',
    'examples_qr/qrexample05.php',
    'examples_qr/qrexample06.php',
    'examples_qr/qrexample07.php',
    'examples_qr/qrexample08.php',
    'examples_qr/qrexample09.php',
    'examples_qr/qrexample10.php',
    'examples_qr/qrexample11.php',
    'examples_qr/qrexample12.php',
    'examples_radar/fixscale_radarex1.php',
    'examples_radar/radarex1.php',
    'examples_radar/radarex2.php',
    'examples_radar/radarex3.php',
    'examples_radar/radarex4.php',
    'examples_radar/radarex5.php',
    'examples_radar/radarex6.1.php',
    'examples_radar/radarex6.php',
    'examples_radar/radarex7.php',
    'examples_radar/radarex8.1.php',
    'examples_radar/radarex8.php',
    'examples_radar/radarex9.php',
    'examples_radar/radarlogex1-aa.php',
    'examples_radar/radarlogex1.php',
    'examples_radar/radarlogex2.php',
    'examples_radar/radarmarkex1.php',
    'examples_rotate/rotateex1.php',
    'examples_rotate/rotex0.php',
    'examples_rotate/rotex1.php',
    'examples_rotate/rotex2.php',
    'examples_rotate/rotex3.php',
    'examples_rotate/rotex4.php',
    'examples_rotate/rotex5.php',
    'examples_scatter/balloonex1.php',
    'examples_scatter/balloonex2.php',
    'examples_scatter/bezierex1.php',
    'examples_scatter/ccbp_ex1.php',
    'examples_scatter/ccbp_ex2.php',
    'examples_scatter/fieldscatterex1.php',
    'examples_scatter/footerex1.php',
    'examples_scatter/impulsex1.php',
    'examples_scatter/impulsex2.php',
    'examples_scatter/impulsex3.php',
    'examples_scatter/impulsex4.php',
    'examples_scatter/loglogex1.php',
    'examples_scatter/markflagex1.php',
    'examples_scatter/pushpinex1.php',
    'examples_scatter/pushpinex2.php',
    'examples_scatter/scatterex1.php',
    'examples_scatter/scatterex2.php',
    'examples_scatter/scatterlinkex1.php',
    'examples_scatter/scatterlinkex2.php',
    'examples_scatter/scatterlinkex3.php',
    'examples_scatter/scatterlinkex4.php',
    'examples_scatter/scatterrotex1.php',
    'examples_staticband/smallstaticbandsex1.php',
    'examples_staticband/smallstaticbandsex10.php',
    'examples_staticband/smallstaticbandsex11.php',
    'examples_staticband/smallstaticbandsex2.php',
    'examples_staticband/smallstaticbandsex3.php',
    'examples_staticband/smallstaticbandsex4.php',
    'examples_staticband/smallstaticbandsex5.php',
    'examples_staticband/smallstaticbandsex6.php',
    'examples_staticband/smallstaticbandsex7.php',
    'examples_staticband/smallstaticbandsex8.php',
    'examples_staticband/smallstaticbandsex9.php',
    'examples_staticband/staticbandbarex1.php',
    'examples_staticband/staticbandbarex2.php',
    'examples_staticband/staticbandbarex3.php',
    'examples_staticband/staticbandbarex4.php',
    'examples_staticband/staticbandbarex5.php',
    'examples_staticband/staticbandbarex6.php',
    'examples_staticband/staticbandbarex7.php',
    'examples_stock/boxstockex1.php',
    'examples_stock/boxstockex2.php',
    'examples_stock/stockex1.php',
    'examples_stock/stockex2.php',
    'examples_sunspot/sunspotsex1.php',
    'examples_sunspot/sunspotsex2.php',
    'examples_sunspot/sunspotsex3.php',
    'examples_sunspot/sunspotsex4.php',
    'examples_sunspot/sunspotsex5.php',
    'examples_sunspot/sunspotsex6.php',
    'examples_sunspot/sunspotsex7.php',
    'examples_tables/table_flagex1.php',
    'examples_tables/table_howto1.php',
    'examples_tables/table_howto2.php',
    'examples_tables/table_howto3.php',
    'examples_tables/table_howto4.php',
    'examples_tables/table_howto5.php',
    'examples_tables/table_howto6.php',
    'examples_tables/table_howto7.1.php',
    'examples_tables/table_howto7.2.php',
    'examples_tables/table_howto7.php',
    'examples_tables/table_howto8.php',
    'examples_tables/table_howto9.php',
    'examples_tables/table_mex0.php',
    'examples_tables/table_mex00.php',
    'examples_tables/table_mex1.php',
    'examples_tables/table_mex2.php',
    'examples_tables/table_mex3.php',
    'examples_tables/table_vtext.php',
    'examples_tables/table_vtext_ex1.php',
    'examples_tables/tablebarex1.php',
    'examples_tables/tableex00.php',
    'examples_tables/tableex01.php',
    'examples_tables/tableex02.php',
    'examples_tables/tableex03.php',
    'examples_tables/tableex04.php',
    'examples_tables/tableex05.php',
    'examples_theme/aqua_example.php',
    'examples_theme/fusion_example.php',
    'examples_theme/green_example.php',
    'examples_theme/ocean_example.php',
    'examples_theme/orange_example.php',
    'examples_theme/pastel_example.php',
    'examples_theme/rose_example.php',
    'examples_theme/softy_example.php',
    'examples_theme/theme_example.php',
    'examples_theme/universal_example.php',
    'examples_theme/vivid_example.php',
    'examples_tick/manualtickex1.php',
    'examples_tick/manualtickex1a.php',
    'examples_tick/manualtickex2.php',
    'examples_tick/manualtickex3.php',
    'examples_tick/manualtickex4.php',
    'examples_windrose/windrose_2plots_ex1.php',
    'examples_windrose/windrose_bgimg_ex1.php',
    'examples_windrose/windrose_ex0.php',
    'examples_windrose/windrose_ex1.php',
    'examples_windrose/windrose_ex1b.php',
    'examples_windrose/windrose_ex2.1.php',
    'examples_windrose/windrose_ex2.php',
    'examples_windrose/windrose_ex3.php',
    'examples_windrose/windrose_ex4.php',
    'examples_windrose/windrose_ex5.php',
    'examples_windrose/windrose_ex6.1.php',
    'examples_windrose/windrose_ex6.php',
    'examples_windrose/windrose_ex7.1.php',
    'examples_windrose/windrose_ex7.php',
    'examples_windrose/windrose_ex8.1.php',
    'examples_windrose/windrose_ex8.php',
    'examples_windrose/windrose_ex9.1.php',
    'examples_windrose/windrose_ex9.php',
    'examples_windrose/windrose_icon_ex1.php',
    'examples_windrose/windrose_layout_ex0.php',
    'examples_windrose/windrose_layout_ex1.php'
];
var filesmenu = _.reduce(files_arr, function(accum, file) {
    var foldername = file.split('/')[0].split('_').join(' '),
        folder = file.split('/')[0],
        testName = folder.split('_')[1],
        testName = 'tests/' + testName[0].toUpperCase() + testName.substring(1) + 'Test.php';
    accum[folder] = accum[folder] || {
        foldername: foldername,
        examples: []
    };
    accum[folder].examples.push(file);
    return accum;
}, {});



jQuery(document).ready(function() {

    var createCard = function(index, title) {
        var card = jQuery('<div class="card"/>');
        var card_header = jQuery('<div class="card-header" role="tab" id="heading' + index + '">');
        var h5 = jQuery('<h5 class="mb-0"/>');
        var data_toggle = jQuery('<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href=""  aria-controls="collapse' + index + '">');
        data_toggle.text(title);
        data_toggle.attr('href', '#collapse' + index);
        data_toggle.appendTo(h5);
        h5.appendTo(card_header);
        card_header.appendTo(card);
        var collapse = jQuery('<div id="collapse' + index + '" class="collapse" role="tabpanel" aria-labelledby="heading' + index + '"/>');
        var card_block = jQuery('<div class="card-block"/>');
        var ul = jQuery('<ul/>');
        ul.appendTo(card_block);
        card_block.appendTo(collapse);
        collapse.appendTo(card);
        return card;
    };


    var sidenav = jQuery('#accordion');
    _.each(filesmenu, function(item, index) {
        var card = createCard(index, item.foldername);

        item.examples = _.sortBy(item.examples);
        var ul = card.find('ul');
        card.appendTo(sidenav);
        //card.find('.collapse').collapse();
        _.each(item.examples, function(filepath) {
            if (filepath.indexOf('_omit') === -1) {
                var li = jQuery('<li/>').appendTo(ul),
                    a = jQuery('<a/>').appendTo(li);
                a.attr('href', filepath);
                a.addClass('example');
                a.attr('target', 'graph_iframe');
                a.text(filepath.split('/')[1].replace('.php', ''));
            }
        });
    });
    jQuery('#accordion').on('click', 'a.example', function() {
        jQuery('#filepath').text($(this).attr('href'));
    });

});