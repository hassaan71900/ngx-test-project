import { onDatePickerPage } from "../support/page_objects/datePickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test  with POM',() =>{
    beforeEach('open application',()=>{
        cy.openHomePage()
    })

    it('Verify Naviation across the pages',()=>{
navigateTo.formLayoutPage()
navigateTo.datePickerPage()
navigateTo.toasterPage()
navigateTo.webTables()
navigateTo.toolTips()
    })


it('Should submit inline and basic form and select tommorrow date in the calender and update Webtables' , ()=>{
    navigateTo.formLayoutPage()
//onFormLayoutsPage.submitInlineFormWithNameAndEmail('Hassaan','hassaan@gmail.com')

navigateTo.datePickerPage()
onDatePickerPage.selectCommonDatePickerDateFromToday(1) 
onDatePickerPage.selectCommonDatePickerDateRange(7,14)

navigateTo.webTables()
 onSmartTablePage.addNewRecordWithFirstAndLastName('Hassaan', 'Farooq')
onSmartTablePage.updtaeAgeByFirstName('Jack','45')
onSmartTablePage.deleteRowByIndex(1)

})


})