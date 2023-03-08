function verificadata(){
	$.get('https://ais.usvisa-info.com/pt-br/niv/schedule/47203635/appointment/days/56.json?appointments[expedite]=false',function name(params) {
		try {
        firstdate = new Date(params[0].date)   
            minDate = new Date('2024-11-31')
        if(firstdate < minDate)
            alert('Visto com data melhor')
        
	    } catch (error) {
        alert(error)
	    }
	})
}

setInterval(verificadata,10000)
