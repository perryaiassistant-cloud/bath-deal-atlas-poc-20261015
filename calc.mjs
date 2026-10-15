export const properties=[
['Widcombe Terrace','Widcombe','Loft conversion',485000,78000,690000,8,'Roof conversion could add a bedroom. Check roof geometry and the local resale ceiling.'],
['Oldfield Park Maisonette','Oldfield Park','Full refurbishment',310000,52000,455000,5,'A shorter cosmetic programme offers upside if the layout and finish meet buyer expectations.'],
['Larkhall Corner House','Larkhall','Side extension',555000,115000,805000,11,'The corner plot may allow extra family space; design and planning need review.'],
['Twerton Garden House','Twerton','Rear extension',365000,89000,560000,9,'A larger kitchen could lift family appeal. Build costs drive the result.'],
['Bear Flat Apartment','Bear Flat','Interior upgrade',345000,43000,475000,5,'A contained refurbishment, with less construction complexity and a smaller margin.'],
['Batheaston Villa','Batheaston','Kitchen and rear extension',625000,135000,915000,12,'A modern family layout could add value. The longer programme increases holding cost.'],
['Combe Down Cottage','Combe Down','Careful refurbishment',495000,76000,675000,8,'Character supports the resale story; older fabric may bring unexpected costs.'],
['Bathampton Bungalow','Bathampton','Loft conversion',515000,108000,755000,10,'An upper floor could transform the layout. Roof and planning feasibility need checking.'],
['Weston Family Home','Weston','Rear extension and refresh',425000,104000,635000,10,'Family focused space may help resale, but overruns quickly erode the margin.'],
['Freshford Stone House','Freshford','Interior renovation',680000,92000,895000,8,'Village setting may support resale, though acquisition ties up more capital.']].map((x,i)=>({id:i+1,name:x[0],area:x[1],plan:x[2],price:x[3],works:x[4],resale:x[5],months:x[6],note:x[7]}));
export const defaults={works:0,resale:0,contingency:12,transaction:4,holding:850};
export function calculate(p,a=defaults){const renovation=Math.round(p.works*(1+a.works/100)),buffer=Math.round(renovation*a.contingency/100),purchaseCosts=Math.round(p.price*a.transaction/100),holding=p.months*a.holding,resale=Math.round(p.resale*(1+a.resale/100)),total=p.price+purchaseCosts+renovation+buffer+holding,profit=resale-total;return {...p,renovation,buffer,purchaseCosts,holding,resale,total,profit,roi:profit/total*100}}
export function rank(a=defaults){return properties.map(p=>calculate(p,a)).sort((a,b)=>b.roi-a.roi||b.profit-a.profit)}
