import { first } from "rxjs-compat/operator/first"

function selectDayFromCurrent(day){
    let date= new Date()
//const currentDate = new Date().toLocaleDateString();
// console.log(currentDate);
// cy.log(currentDate);

date.setDate(date.getDate() + day)
let futureDay= date.getDate()
let futureMonth= date.toLocaleString('default',{month:'short'})       // to select if we select day from end dates 
let dateAssert= futureMonth+' '+futureDay+', '+date.getFullYear()
//current month not equal the choosen month then

cy.get('nb-calendar-navigation').invoke('attr','ng-reflect-date').then(dateAttribute=>{

if(!dateAttribute.includes(futureMonth)){
cy.get('[data-name="chevron-right"]').click()
selectDayFromCurrent(day)
//cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
}
else{
  cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
}
})
return dateAssert
}




export class datePickerPage{


selectCommonDatePickerDateFromToday(dayFromToday){
       cy.contains('nb-card','Common Datepicker').find('input').then(input => {
        cy.wrap(input).click({force:true})
        let dateAssert=selectDayFromCurrent(dayFromToday)
      //  cy.get('nb-calendar-day-picker').contains('3').click()
      cy.wrap(input).invoke('prop', 'value').should('contain',dateAssert)
      cy.wrap(input).should('have.value',dateAssert)
       })
}


    selectCommonDatePickerDateRange(firstDay, secondDay){
        cy.contains('nb-card','Datepicker With Range').find('input').then(input => {
         cy.wrap(input).click({force:true})
         let dateAssertFirst=selectDayFromCurrent(firstDay)
         let dateAssertSecond=selectDayFromCurrent(secondDay)

         const finalDate= dateAssertFirst+' - ' +dateAssertSecond   
       //  cy.get('nb-calendar-day-picker').contains('3').click()
       cy.wrap(input).invoke('prop', 'value').should('contain',finalDate)
       cy.wrap(input).should('have.value',finalDate)
        })
    
    }
}



export const onDatePickerPage= new datePickerPage()