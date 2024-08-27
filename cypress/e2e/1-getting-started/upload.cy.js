describe('Upload_file', ()=>{
    it('Uploadfile', ()=>{
cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo')
cy.get('#file').selectFile('Metallica.mp3')

    })
})