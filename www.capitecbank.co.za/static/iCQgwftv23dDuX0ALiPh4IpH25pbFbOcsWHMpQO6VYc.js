/*!
* PerfectMasonry extension for Isotope
*
* Does similar things as the Isotopes "masonry" layoutmode, except that this one will actually go back and plug the holes
* left by bigger elements, thus making a perfect brick wall. Profit!
*
* Usage:
* $('#grid').isotope({
* layoutMode: 'perfectMasonry',
* perfectMasonry: {
* layout: 'horizontal', // Set layout as vertical/horizontal (default: vertical)
* columnWidth: 200, // Set/Prefer columns to x wide (default: width of first tile)
* rowHeight: 200, // Set/Prefer rows to y high (default: height of first tile)
*
* liquid: true, // Set layout as liquid (default: false)
* cols: 3, // Force to have x columns (default: null)
* rows: 3, // Force to have y rows (default: null)
* minCols: 3, // Set min col count (default: 1)
* minRows: 3, // Set min row count (default: 1)
* maxCols: 5, // Set max col count (default: 9999)
* maxRows: 4 // Set max row count (default: 9999)
* }
* });
*
*
* @author Mikko Tikkanen, Zonear Ltd. <contact@zonear.com>
*/;(function($,undefined){var version='1.2.1';var isotope=null,$context=null,$container=null,isFirstRun=true;$.extend($.Isotope.prototype,{_perfectMasonryReset:function(){var isVertical=this.options.perfectMasonry.layout!='horizontal',isLiquid=this.options.perfectMasonry.liquid==true;if(isFirstRun){isFirstRun=false;isotope=this;$context=$(this.element.context);$container=$context.parent();this.options.perfectMasonry.minCols=this.options.perfectMasonry.minCols||1;this.options.perfectMasonry.minRows=this.options.perfectMasonry.minRows||1;this.options.perfectMasonry.maxCols=this.options.perfectMasonry.maxCols||9999;this.options.perfectMasonry.maxRows=this.options.perfectMasonry.maxRows||9999;}
if(isLiquid&&$._data(window,'events').smartresize){$(window).off('smartresize.isotope');$(window).on('resize.isotope.perfectmasonry',function(){if(!$context.hasClass('isotope')){return;}
$context.isotope('reLayout');});}
var properties=this.perfectMasonry={};properties.fullContainerWidth=this.options.perfectMasonry.fullContainerWidth;this._getSegments();this._getSegments(true);this._perfectMasonryGetSegments();if(isLiquid){var width=$container.width(),height=$container.height();this.options.perfectMasonry.columnWidth=this.options.perfectMasonry.columnWidth||properties.columnWidth;this.options.perfectMasonry.rowHeight=this.options.perfectMasonry.rowHeight||properties.rowHeight;properties.cols=this.options.perfectMasonry.cols||Math.floor(width/this.options.perfectMasonry.columnWidth);properties.rows=this.options.perfectMasonry.rows||Math.floor(height/this.options.perfectMasonry.rowHeight);properties.cols=Math.min(Math.max(properties.cols,this.options.perfectMasonry.minCols),this.options.perfectMasonry.maxCols);properties.rows=Math.min(Math.max(properties.rows,this.options.perfectMasonry.minRows),this.options.perfectMasonry.maxRows);var diff=(isVertical?properties.columnWidth/(width/properties.cols):properties.rowHeight/(height/properties.rows));properties.columnWidth=Math.floor(properties.columnWidth/diff);properties.rowHeight=Math.floor(properties.rowHeight/diff);}
properties.grid=new Array(this.perfectMasonry.cols);properties.containerHeight=0;properties.containerWidth=0;},_perfectMasonryLayout:function($elems){var instance=this,properties=this.perfectMasonry,isVertical=instance.options.perfectMasonry.layout!='horizontal',isLiquid=instance.options.perfectMasonry.liquid==true;properties.grid=new Array(properties[(isVertical?'cols':'rows')]);$elems.each(function(){var $this=$(this);var colSpan=(isLiquid?$this.data('colSpan'):Math.ceil($this.outerWidth()/(properties.columnWidth+1))),rowSpan=(isLiquid?$this.data('rowSpan'):Math.ceil($this.outerHeight()/(properties.rowHeight+1)));if(!colSpan){colSpan=Math.ceil($this.outerWidth(true)*properties.parentScale/(properties.columnWidth+1));rowSpan=Math.ceil($this.outerHeight(true)*properties.parentScale/(properties.rowHeight+1));$this.data('colSpan',colSpan);$this.data('rowSpan',rowSpan);}
var aSpan=(isVertical?colSpan:rowSpan);var bSpan=(isVertical?rowSpan:colSpan);var max=Math.max((isVertical?properties.cols-colSpan:properties.rows-rowSpan)+1,1);var a=-1,x=0,y=0;while(++a<10000){properties.grid[a]=properties.grid[a]||[];for(var b=0;b<max;b++){var tile=properties.grid[a][b];if(tile){continue;}
var doesFit=true;if(colSpan>1||rowSpan>1){for(var i=0;i<aSpan;i++){for(var j=0;j<bSpan;j++){properties.grid[a+j]=properties.grid[a+j]||[];if(properties.grid[a+j][b+i]){doesFit=false;break;}}
if(!doesFit){break;}}}
if(!doesFit){continue}
for(var i=0;i<aSpan;i++){for(var j=0;j<bSpan;j++){properties.grid[a+j][b+i]=true;}}
var x=a,y=b;if(isVertical){var x=b,y=a;}
properties.containerWidth=properties.fullContainerWidth;properties.containerHeight=Math.max(properties.containerHeight,(y+bSpan)*properties.rowHeight);if(instance.options.perfectMasonry.liquid==true){$this.css({width:properties.columnWidth*colSpan,height:properties.rowHeight*rowSpan});}
instance._pushPosition($this,x*properties.columnWidth,y*properties.rowHeight);return;}}
instance._pushPosition($this,-9999,-9999);});},_perfectMasonryGetContainerSize:function(){return{width:this.perfectMasonry.containerWidth,height:this.perfectMasonry.containerHeight};},_perfectMasonryResizeChanged:function(){var properties=this.perfectMasonry;var oldCols=properties.cols,oldRows=properties.rows;this._perfectMasonryGetSegments();if(this.options.perfectMasonry.layout=='horizontal'&&oldRows!==properties.rows){return true;}
if(oldCols!==properties.cols){return true;}
return false;},_perfectMasonryGetSegments:function(){var properties=this.perfectMasonry;var parent=this.options.perfectMasonry.parent||this.element.parent();var parentScale=parent.width()/properties.fullContainerWidth;properties.parentScale=parentScale;var parentWidth=parent.width();properties.cols=Math.floor(parentWidth/(properties.columnWidth*properties.parentScale))||1;var parentHeight=parent.height();properties.rows=Math.floor(parentHeight/properties.rowHeight)||1;}});})(jQuery);