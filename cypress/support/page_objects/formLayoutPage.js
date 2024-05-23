export class formLayoutPage{

    submitInlineFormWithNameAndEmail(name, email){
     cy.contains('nb-card', 'Inline form').find('form').then(form=>{
        cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
        cy.wrap(form).find('[placeholder="Email"]').type(email)
        cy.wrap(form).find('."custom-checkbox"').click({force:true})
        cy.wrap(form).submit()

     })
}}


export const onFormLayoutsPage= new formLayoutPage()