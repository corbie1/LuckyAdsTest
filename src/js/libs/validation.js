var codes=['904','900','901','902','903','905','906','908','909','910','911','912','913','914','915','916','917','918','919','920','921','922','923','924','925','926','927','928','929','930','931','932','933','934','936','937','938','939','950','951','952','953','958','960','961','962','963','964','965','966','967','968','969','978','980','981','982','983','984','985','986','987','988','989','992','994','995','996','997','999'];function checkField(input){var customValidity='';if(input.value===''){customValidity='Заполните поле';}else if(isInvalidRegion(input)){customValidity='Введите корректный код региона';}else if(isInvalidPhoneNumber(input)){customValidity='Введите корректный номер';}
input.setCustomValidity(customValidity);return customValidity==='';}
function isInvalidPhoneNumber(input){var numbers=input.value.match(/\d+/g).join('');var length=numbers.length;if(length>11)input.value=input.value.substring(0,input.value.length-1);;return numbers.length<11;}
function isInvalidRegion(input){var code=input.value.match(/9\d{2}/);return code?codes.indexOf(code[0])==-1:true;}
function initValidation(selector='input[type=tel]'){var inputs=document.querySelectorAll(selector);inputs.forEach(function(input){input.required=true;input.addEventListener('input',function(){checkField(input);});input.checkValidity=function(){return checkField(input);}
checkField(input);});}
document.addEventListener("DOMContentLoaded",function(){initValidation();});