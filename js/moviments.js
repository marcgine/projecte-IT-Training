function passaSeguent(objRebut){
    let idObjPregAct = objRebut.parentElement.id; 
    let objPregAct = document.getElementById(idObjPregAct);
    let colArticles = document.getElementsByTagName("article");
    let idObjPregSeg;
      for (let i = 0; i < colArticles.length; i++) {
      if(colArticles[i].id == idObjPregAct){
        idObjPregSeg = colArticles[i+1].id;
        break;
      };
    }
    let objPregSeg = document.getElementById(idObjPregSeg);
    objPregAct.classList.remove("elementVisible");
    objPregAct.classList.add("elementOcult");
    objPregSeg.classList.add("elementVisible");
    objPregSeg.classList.remove("elementOcult");
  }
