

function selectGrupMenuItem(groupName) {
    cy.contains('a',groupName).then(menu=>{
        cy.wrap(menu).find('.expand-state g g').invoke('attr','data-name').then(attr=>{
            if(attr.includes('left')){
                cy.wrap(menu).click()
            }
        })
    })
}

export class NavigationPage{

    formLayoutPage(){
        selectGrupMenuItem('Form')
     cy.contains('Form Layouts').click()


    }

    datePickerPage(){
        selectGrupMenuItem('Form')
        cy.contains('Datepicker').click()
    }

    toasterPage(){
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()
    }
    webTables(){
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
    }
    toolTips(){
       // cy.contains('Modal & Overlays').click()
       selectGrupMenuItem('Modal & Overlays') 
       cy.contains('Tooltip').click()
    }

}

export const navigateTo= new NavigationPage()