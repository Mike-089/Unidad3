function cambiarEstilos() {
    
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.style.backgroundColor = '#f0f8ff';
        grid.style.borderRadius = '10px';
        grid.style.padding = '20px';
        grid.style.transition = 'all 0.3s ease';
    });

   
    const headings = document.querySelectorAll('h3');
    headings.forEach(h3 => {
        h3.style.color = '#333';
        h3.style.fontFamily = 'Arial, sans-serif';
    });

   
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.fontSize = '16px';
        p.style.color = '#000';
    });


 
   
}