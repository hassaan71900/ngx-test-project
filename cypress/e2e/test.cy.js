/// <reference types= "cypress"/>

const { table } = require("console")
const { wrap } = require("module")

describe('Our first suite', ()=>{
      it('Visit Url',()=>{
    cy.visit ('http://localhost:4200/')
    
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    //by tag name
    cy.get('input')
    // by ID
    cy.get('#inputEmail1')
    //by class name
    cy.get('.input-full-width')
    //by Attribute name
    cy.get('[placeholder]')
    //by attribute name and value
    cy.get('[placeholder="Email"]')
    //by Class Value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')
    //by Tag name and Attribute with value
    cy.get('input[placeholder="Email"]') 
    // by two different attributes
    cy.get('[placeholder="Email"][type="email"]')
    
    })
    it("Our second test",()=>{
     cy.visit('/')
     cy.contains('Forms').click()
     cy.contains('Form Layouts').click()
     //making our own locator in file
     cy.get('[data-cy="SignInButton"]')
     //to get element by text
     cy.contains('Sign in')
    // Find me a element with specific attribute
     cy.contains('[status="warning"]','Sign in')
    
    //traverse through to get element
    cy.get('#inputEmail3')
    .parents('form')
    .find('button')
    .should('contain','Sign in')
    .parents('form')
    
    //find used to find child element through parent element
    .find('nb-checkbox')
    .click({force:true})
    
    cy.contains('nb-card','Horizontal form').find('[type="password"]')
    
    })
    it("then and wrap methods",()=>{
     cy.visit('/')
     cy.contains('Forms').click()
     cy.contains('Form Layouts').click()
    
    //   cy.contains('nb-card','Using the Grid').find('[for=inputEmail1]').should('contain','Email')
    //   cy.contains('nb-card','Using the Grid').find('[for=inputPassword2]').should('contain','Password')
    
    //   cy.contains('nb-card','Basic form').find('[for=exampleInputEmail1]').should('contain','Email address')
    //   cy.contains('nb-card','Basic form').find('[for=exampleInputPassword1]').should('contain','Password')
     
    // //   // selemium
    // //   const firstForm= cy.contains('nb-card','Using the Grid')
    
    
    // //   firstForm.find('[for=inputEmail1]').should('contain','Email')
    // // firstForm.find('[for=inputPassword2]').should('contain','Password')
    
    
    cy.contains('nb-card','Using the Grid').then(firstForm =>{
    const emailLabelFirst= firstForm.find('[for=inputEmail1]').text()
    const passwordLabelFirst= firstForm.find('[for=inputPassword2]').text()
    expect(emailLabelFirst).to.equal('Email')
    expect(passwordLabelFirst).to.equal('Password')
    
    
    //compare password of both form using assertions
    cy.contains('nb-card','Basic form').then(secondForm => {
     const emailLabelSecond= secondForm.find('[for=exampleInputEmail1]').text()
     const passwordLabelSecond= secondForm.find('[for=exampleInputPassword1]').text()
     expect(passwordLabelFirst).to.equal(passwordLabelSecond)
    
    cy.wrap(secondForm).find('[for=exampleInputPassword1]').should('contain','Password')
    
    })
    })
    
    it("invoke command",()=>{
     cy.visit('/')
     cy.contains('Forms').click()
     cy.contains('Form Layouts').click()
    
     //1
     cy.get('[for=exampleInputEmail1]').should('contain','Email address')
    })
     //2
     cy.get('[for=exampleInputEmail1]').then( label => {
    expect(label.text()).to.equal('Email address')
    })  
    //3
    cy.get('[for=exampleInputEmail1]').invoke('text').then(text => {
     expect(text).to.equal('Email address')
    })
    cy.contains('nb-card', 'Basic form')
    .find('nb-checkbox')
    .click()
    .find('.custom-checkbox')
    .invoke('attr','class')
    // .should('contain','checked')
    .then(classValue =>{
     expect(classValue).to.contain('checked')
    })
    })
    
    it('assert property Datepicker', ()=>{
      
     cy.visit('/')
     cy.contains('Forms').click()
     cy.contains('Datepicker').click({force:true})
    
    })




    it('radio button', ()=>{
     cy.visit('/')
     cy.contains('Forms').click()
     cy.contains('Form Layout').click()
    
     cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radiobuttons=>{
    cy.wrap(radiobuttons)
    .first()
    .check({force:true})
    .should('be.checked')

    cy.wrap(radiobuttons)
    .eq(1)
    .check({force:true})

    cy.wrap(radiobuttons)
    .first()
    .should('not.be.checked')
    cy.wrap(radiobuttons)
    .eq(2)
    .should('be.disabled')
  
  
  }) 
    
  


  })

  it('Checkboxes', ()=> {
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()

    //cy.get('[type="checkbox"]').check({force:true})
    //  to uncheck the checkbox and check only used with checkbx type.
    cy.get('[type="checkbox"]').eq(0).click({force:true})
    cy.get('[type="checkbox"]').eq(1).check({force:true})


    })

      
  
})

it('List and Dropdown', ()=> {
  cy.visit('/')
  // cy.get('nav nb-select',).click()
  // cy.get('.options-list').contains('Dark').click()
  // cy.get('nav nb-select',).should('contain','Dark')
  // cy.get('nb-layout-header nav').should('have.css','background-color','rgb(34, 43, 69)')

  //2
    cy.get('nav nb-select').then(dropdown =>{
      cy.wrap(dropdown).click()
      cy.get('.options-list nb-option').each( (listItem , index)=>{
        const itemText= listItem.text().trim()
            
        const colors= {

              "Light": "rgb(255, 255, 255)",
              "Dark":"rgb(34, 43, 69)",
              "Cosmic":"rgb(50, 50, 89)",
              "Corporate":"rgb(255, 255, 255)"
            }

        cy.wrap(listItem).click()
        cy.wrap(dropdown).should('contain',itemText)
        cy.get('nb-layout-header nav').should('have.css','background-color', colors[itemText])

        if(index<3){
        cy.wrap(dropdown).click()
        } 
      })


    })

    //find a guy name jack and update the age 

 
    })
    it('Web Tables',()=>{
      cy.visit('/')
      cy.contains('Tables & Data').click()
      cy.contains('Smart Table').click()

      //1
    
      

//3 FIlter functionality check

const age=[20, 34, 40, 200]
cy.wrap(age).each(age=>{

cy.get('thead [placeholder="Age"]').clear().type(age)
cy.wait(500)
cy.get('tbody tr').each( tableRow =>{

  if(age==200){
cy.wrap(tableRow).should('contain', 'No data found')
  }else{
  cy.wrap(tableRow).find('td').eq(6).should('contain', age)
  
}


})
})

      })
// Pop-ups amd dialog boxes
      it('Tooltips',()=>{
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()
      
        cy.contains('nb-card','Colored Tooltips').contains('Default').click({force:true})
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
        
      
      
    })

    it.only('Dialog box',()=>{
      cy.visit('/')
      cy.contains('Tables & Data').click()
      cy.contains('Smart Table').click()
    //cy.get('tbody tr').first().find('.nb-trash').click({force:true})
    //1st Approach
  //   cy.on('window:confirm',(confirm)=>{
  //  expect(confirm).to.equal('Are you sure you want to delete?')
    

    //2
    const stub = cy.stub()
    cy.on('window:confirm',stub)
    cy.get('tbody tr').first().find('.nb-trash').click({force:true}).then(() =>{
      expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
    })

    
    })