var branchToShow;var map;var overlay;var markers={};try{$('input[name="searchTerm"]').autocomplete({source:branchNames,select:function(event,ui){$('input[name="searchTerm"]').val(ui.item.label);$('form[name="keywordSearch"]').submit();}});}
catch(e){}
$('.viewOnMap').addClass('js-enabled');if($('.branchContactDetail').length)$('.branchSearchTabsWrapper').show();$('.viewAsList').on('click',function(){$('.mapWrapper').fadeOut();$('.branchListing').fadeIn();$('.viewAsList').parent().hide();$('.viewAsMap').parent().show();return false;});$('.viewAsMap').on('click',function(){showMapPanel();return false;});function toggleCheckbox(checkBoxId,checked){if(checked===true){$('input[name="'+checkBoxId+'"]').parent('.checkBoxContainer').addClass('checkActive');}else{$('input[name="'+checkBoxId+'"]').prop('checked',false).parent('.checkBoxContainer').removeClass('checkActive');}}
$('.branchLocatorFilterOptions').on('click','[type="checkbox"]',function(){var $this=$(this);var filterType=$this.attr('name');$('.branchContactDetail:not(".'+getFilterClass(filterType)+'")').hide();$('.'+getFilterClass(filterType)).show();var visibleElements=$('.'+getFilterClass(filterType)+':visible').size();$('.branchSearchResultsCount').html(visibleElements);if(visibleElements>1){$('.plural').show();}else{$('.plural').hide();}
syncMapMarkers(filterType);toggleCheckbox(filterType,true);uncheckCheckboxes(filterType);});$(function(){$('.branchLocatorFilterOptions .checkBoxContainer input:checked').click();});function uncheckCheckboxes(filter){if(filter!="branches"){toggleCheckbox("branches",false);}
if(filter!="homeloans"){toggleCheckbox("homeloans",false);}
if(filter!="atms"){toggleCheckbox("atms",false);}
if(filter!="cashAcceptingAtms"){toggleCheckbox("cashAcceptingAtms",false);}}
function getFilterClass(filter){var className="";if(filter=="branches"){className="branchFilter";}
if(filter=="homeloans"){className="homeloansFilter";}
if(filter=="atms"){className="atmFilter";}
if(filter=="cashAcceptingAtms"){className="cashAcceptAtmFilter";}
return className}
function syncMapMarkers(filterValue){for(var i in markers){if(markers[i]["type"]===filterValue){markers[i].setVisible(true);}else{markers[i].setVisible(false);}}}
function showMapPanel(){$('.viewAsMap').parent().hide();$('.viewAsList').parent().show();$('.branchListing').fadeOut();$('.mapWrapper').fadeIn();loadGoogleMapsScriptAndInitialize();}
if(('geolocation'in navigator)){$('.geolocationSearch').show();$('.searchByBranch .additionalInfo').remove();}
$('#findByGeolocation').on('click',function(){navigator.geolocation.getCurrentPosition(submitInformation);return false;});$('#geoLocatorFindCashAcceptingAtmPanel').on('click',function(){navigator.geolocation.getCurrentPosition(submitCTAInformation);return false;});function submitCTAInformation(position){var url='/branch-locator?'+
'latitude='+position.coords.latitude+
'&longitude='+position.coords.longitude;window.location=url;}
function submitInformation(position){var url='/branch-locator?'+
$('.geolocationSearch').serialize()+
'&latitude='+position.coords.latitude+
'&longitude='+position.coords.longitude;window.location=url;}
$('#branchLocatorFindHomeLoansPanel').on('click',function(){if(('geolocation'in navigator)){navigator.geolocation.getCurrentPosition(submitBranchLocatorFindInformation);return false;}
else{return true;}});function submitBranchLocatorFindInformation(){var url='/branch-locator?'+
'latitude='+position.coords.latitude+
'&longitude='+position.coords.longitude;window.location=url;}
function showBranchInfo(branchId){var $wrapper=$('#branch_'+branchId);overlay.setContent($wrapper.html());overlay.open(map,markers[branchId]);}
function initializeMapIfNeededAndShowBranch(branchId){branchToShow=branchId;showMapPanel();if(map){showBranchInfo(branchId);}}
function initialize(){var mapOptions={center:new google.maps.LatLng(-25.377217,28.259717),zoom:8,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:false};map=new google.maps.Map(document.getElementById('mapCanvas'),mapOptions);$('.branchContactDetail').each(function(){createMarker($(this),centerOnMarker);centerOnMarker=false;});overlay=new google.maps.InfoWindow({content:''});if(geolocationSearch){var latLng=new google.maps.LatLng(latitude,longitude);var radius=5000;var circle=new google.maps.Circle({radius:radius,center:latLng,map:map,fillColor:'#7EC6E9',fillOpacity:0.15,strokeWeight:0});var marker=new google.maps.Marker({position:latLng,map:map,title:'You are here',icon:serverURL+'/nrs-images/branch-locator-pointers/you-are-here.png'});map.setCenter(latLng);}
var bounds=new google.maps.LatLngBounds();$('.branchContactDetail').each(function(){bounds.extend(new google.maps.LatLng($(this).find('input[name="latitude"]').val(),$(this).find('input[name="longitude"]').val()))});if($('.branchContactDetail').length>1){map.fitBounds(bounds);}
else{map.setCenter(bounds.getCenter());map.setZoom(14);}
if(branchToShow)setTimeout(function(){showBranchInfo(branchToShow);},500);}
function createMarker($branchWrapper,centerOnMarker){var latLng=new google.maps.LatLng($branchWrapper.find('input[name="latitude"]').val(),$branchWrapper.find('input[name="longitude"]').val());var pin=$branchWrapper.find('.branch').length?'branch-locator_branch_pin.png':($branchWrapper.find('.ctaAtm').length?'branch-locator__CTA_atm_pin.png':($branchWrapper.find('.partner').length?'branch-locator_atm_partner_pin.png':'branch-locator_atm_pin.png'));var marker=new google.maps.Marker({position:latLng,map:map,title:$branchWrapper.find('h2').text(),icon:serverURL+'/nrs-images/branch-locator-pointers/'+pin});marker.type=$branchWrapper.hasClass('branchFilter')?'branch':'atm';marker.cashAcceptingATM=$branchWrapper.find('.ctaAtm').length?true:false;marker.homeloansBranch=$branchWrapper.find('.homeloansProvider').length?true:false;if(marker.type=='atm'&&!$('input[name="atms"]').is(':checked')){marker.setVisible(false);}
if(marker.cashAcceptingATM===true&&!$('input[name="cashAcceptingAtms"]').is(':checked')){marker.setVisible(false);}
markers[$branchWrapper.find('input[name="id"]').val()]=marker;google.maps.event.addListener(marker,'click',function(){var branchId=$branchWrapper.find('input[name="id"]').val();map.setCenter(marker.position);showBranchInfo(branchId);});if(centerOnMarker)map.setCenter(latLng);}
function loadGoogleMapsScriptAndInitialize(){if($('#googleMapsScript').length>0)return;var script=document.createElement('script');script.id='googleMapsScript';script.type='text/javascript';script.src='https://maps.googleapis.com/maps/api/js?key='+googleMapsKey+'&sensor=false&callback=initialize';document.body.appendChild(script);}