//ordering actors names alphabetical
function sortNames()
{
	var list, i, switching, shouldSwitch;
	list = document.getElelemntById("actors_name");
	switching = true;
	while(switching)
	{
		switching = false;
		b = list.getElelemntByTagName('h3');
		for(i = 0; i < (b.lenght - 1); i++)
		{
			shouldSwitch = false;
			if(b[i].innerHTML.toLowerCase() > b[i+1].innerHTML.toLowerCase())
			{
				shouldSwitch = true;
				break;
			}
		}
		if(shouldSwitch)
		{
			b[i].parentNode.insertBefore(b[i+1], b[i]);
			switching = true;
		}
	}
}