/*
Copyright Dinamenta, UAB. http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/
Scheduler.plugin(function(a){a.__recurring_template='<div class="dhx_form_repeat"><form><div class="dhx_repeat_left"><label><input class="dhx_repeat_radio" type="radio" name="repeat" value="day" />Denn\u011b</label><br /><label><input class="dhx_repeat_radio" type="radio" name="repeat" value="week"/>T\u00fddn\u011b</label><br /><label><input class="dhx_repeat_radio" type="radio" name="repeat" value="month" checked />M\u011bs\u00ed\u010dn\u011b</label><br /><label><input class="dhx_repeat_radio" type="radio" name="repeat" value="year" />Ro\u010dn\u011b</label></div><div class="dhx_repeat_divider"></div><div class="dhx_repeat_center"><div style="display:none;" id="dhx_repeat_day"><label>Opakovan\u00e9:<br/></label><label><input class="dhx_repeat_radio" type="radio" name="day_type" value="d"/>ka\u017ed\u00fd</label><input class="dhx_repeat_text" type="text" name="day_count" value="1" />Den<br /><label><input class="dhx_repeat_radio" type="radio" name="day_type" checked value="w"/>pracovn\u00ed dny</label></div><div style="display:none;" id="dhx_repeat_week"> Opakuje ka\u017ed\u00fdch<input class="dhx_repeat_text" type="text" name="week_count" value="1" />T\u00fddn\u016f na:<br /><table class="dhx_repeat_days"><tr> <td><label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="1" />Pond\u011bl\u00ed</label><br /><label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="4" />\u010ctvrtek</label> </td> <td><label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="2" />\u00dater\u00fd</label><br /><label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="5" />P\u00e1tek</label> </td> <td><label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="3" />St\u0159eda</label><br /><label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="6" />Sobota</label> </td> <td><label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="0" />Ned\u011ble </label><br /><br /> </td></tr></table></div><div id="dhx_repeat_month"><label>Opakovan\u00e9:<br/></label><label><input class="dhx_repeat_radio" type="radio" name="month_type" value="d"/>u ka\u017ed\u00e9ho</label><input class="dhx_repeat_text" type="text" name="month_day" value="1" />Den ka\u017ed\u00e9ho<input class="dhx_repeat_text" type="text" name="month_count" value="1" />M\u011bs\u00edc<br /><label><input class="dhx_repeat_radio" type="radio" name="month_type" checked value="w"/>na</label><input class="dhx_repeat_text" type="text" name="month_week2" value="1" /><select name="month_day2"><option value="1" selected >Pond\u011bl\u00ed<option value="2">\u00dater\u00fd<option value="3">St\u0159eda<option value="4">\u010ctvrtek<option value="5">P\u00e1tek<option value="6">Sobota<option value="0">Ned\u011ble</select>ka\u017ed\u00fd<input class="dhx_repeat_text" type="text" name="month_count2" value="1" />M\u011bs\u00edc<br /> </div> <div style="display:none;" id="dhx_repeat_year"> <label>Opakovan\u00e9:</label> <label><input class="dhx_repeat_radio" type="radio" name="year_type" value="d"/>u ka\u017ed\u00e9ho</label><input class="dhx_repeat_text" type="text" name="year_day" value="1" />Den v<select name="year_month"><option value="0" selected >Leden<option value="1">\u00danor<option value="2">B\u0159ezen<option value="3">Duben<option value="4">Kv\u011bten<option value="5">\u010cerven<option value="6">\u010cervenec<option value="7">Srpen<option value="8">Z\u00e1\u0159\u00ed<option value="9">\u0158\u00edjen<option value="10">Listopad<option value="11">Prosinec</select><br /> <label><input class="dhx_repeat_radio" type="radio" name="year_type" checked value="w"/>na</label><input class="dhx_repeat_text" type="text" name="year_week2" value="1" /><select name="year_day2"><option value="1" selected >Pond\u011bl\u00ed<option value="2">\u00dater\u00fd<option value="3">St\u0159eda<option value="4">\u010ctvrtek<option value="5">P\u00e1tek<option value="6">Sobota<option value="0">Ned\u011ble</select>v<select name="year_month2"><option value="0" selected >Leden<option value="1">\u00danor<option value="2">B\u0159ezen<option value="3">Duben<option value="4">Kv\u011bten<option value="5">\u010cerven<option value="6">\u010cervenec<option value="7">Srpen<option value="8">Z\u00e1\u0159\u00ed<option value="9">\u0158\u00edjen<option value="10">Listopad<option value="11">Prosinec</select><br /> </div> </div> <div class="dhx_repeat_divider"></div> <div class="dhx_repeat_right"> <label><input class="dhx_repeat_radio" type="radio" name="end" checked/>bez data ukon\u010den\u00ed</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="end" />po</label><input class="dhx_repeat_text" type="text" name="occurences_count" value="1" />Ud\u00e1losti<br /> <label><input class="dhx_repeat_radio" type="radio" name="end" />Konec</label><input class="dhx_repeat_date" type="text" name="date_of_end" value="'+
a.config.repeat_date_of_end+'" /><br /></div> </form> </div> <div style="clear:both"> </div>'});