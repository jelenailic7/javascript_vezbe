// Karakteristike sistema zdravstvene ustanove su:
// - Doktor (ime, prezime, specijalnost) ima više pacijenata (ime, prezime, jmbg, broj zdravstvenog kartona).
// - Pacijent moze da ima samo jednog doktora.
// - Doktor moze da zakaže laboratorijski pregled za pacijenta.
// - Svaki laboratorijski pregled ima datum i vreme kada je zakazan
// - Tipovi laboratorijskog pregleda su:
//   - krvni pritisak (gornja vrednost, donja vrednost, puls)
//   - nivo šećera u krvi (vrednost, vreme poslednjeg obroka)
//   - nivo holesterola u krvi (vrednost, vreme poslednjeg obroka)

// Napraviti simulacionu skriptu koja radi sledeće:
// - kreirati doktora “Milan”
// - kreirati pacijenta “Dragan”
// - pacijent “Dragan” bira doktora “Milan” za svog izabranog lekara
// - doktor “Milan” zakazuje pregled za merenje nivoa šećera u krvi za pacijenta “Dragan”
// - doktor “Milan” zakazuje pregled za merenje krvnog pritiska za pacijenta “Dragan”
// - pacijent “Dragan” obavlja laboratorijski pregled za merenje nivoa šećera u krvi. Simulirati i prikazati rezultate.
// - pacijent “Dragan” obavlja laboratorijski pregled za merenje krvnog pritiska. Simulirati i prikazati rezultate.


// Dodati logovanje akcija u sistemu. Akcije logovati u fajl u formatu [datum] [vreme] [akcija].
// Primer jedne linije log fajla: [20.03.2013 19:30] Kreiran pacijent “Milan”


// Akcije koje treba da se loguju su:
// - kreiranje doktora
// - kreiranje pacijenta
// - pacijent bira doktora
// - obavljanje laboratorijskog pregleda


class Osoba {

	constructor (ime,prezime){
		this.ime = ime;
		this.prezime = prezime;

	}
}


class Doktor extends Osoba {

	constructor (ime,prezime,specijalnost)
	{
		super(ime,prezime);
		this.specijalnost = specijalnost;
		this.pacijenti=[];
		Loger.logujKreiranjeDoktora(this);
	}


	zakaziPregled(pregled){
		this.pregled = pregled;
	}
}


class Pacijent extends Osoba {

	constructor(ime,prezime,jmbg,brojKartona )
	{
		super(ime, prezime);
		this.jmbg = jmbg;
		this.brojKartona = brojKartona;
		Loger.logujKreiranjePacijenta(this);
	}

	 izaberiDoktora(doktor) {
		this.doktor = doktor;
		Loger.logujPacijentBiraDoktora(this,this.doktor);
	}
}




class Pregled  {

	constructor(datum,vreme,pacijent,tip){
		this.datum = datum;
		this.vreme = vreme;
		this.pacijent = pacijent;
		this.tip = tip;

	}
}	


class PregledKrvnogPritiska extends Pregled {

	constructor(datum,vreme,pacijent,tip,gornjaVrednost, donjaVrednost, puls){
		super(datum,vreme,pacijent,'krvni pritisak');
		this.gornjaVrednost = gornjaVrednost;
		this.donjaVrednost = donjaVrednost;
		this.puls = puls;

	}

	obaviPregled()
   {
        console.log("Pregled krvnog pritiska za pacijenta " + pacijent.ime + " " + pacijent.prezime + " ");

       this.gornjaVrednost = 120;
       this.donjaVrednost = 80;
       this.puls = 60;

       console.log("Rezultati pregleda: pritisak je "+ this.gornjaVrednost + this.donjaVrednost + ", a puls je "+ this.puls + " ");

       Loger.logujObavljanjePregleda(this);
   }
}

class PregledSecera extends Pregled {

	constructor(datum,vreme,pacijent,tip,vrednost, vremePoslednjegObroka){
		super(datum,vreme,pacijent,'nivo secera');
		this.vrednost = vrednost;
		this.vremePoslednjegObroka = vremePoslednjegObroka;
	}

    obaviPregled()
   {
       console.log("Pregled nivoa secera za pacijenta "+ pacijent.ime +" "+ pacijent.prezime +" ");   

       this.vrednost = 50;
       this.vremePoslednjegObroka = '10:00';

       console.log("Rezultati pregleda: secer je "+ this.vrednost + ", a vreme poslednjeg obroka je "+ this.vremePoslednjegObroka + " ");

       Loger.logujObavljanjePregleda(this);
	}
}

class PregledHolesterola extends Pregled {

		constructor(vrednost, vremePoslednjegObroka){
		super(datum,vreme,pacijent,'nivo holesterola');
		this.vrednost = vrednost;
		this.vremePoslednjegObroka = vremePoslednjegObroka;
	}
}




class Loger {



    static logujKreiranjeDoktora(doktor)
    {
       console.log("["+ new Date().getFullYear() + "."+new Date().getMonth() + "."+ new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes() +"]" + "kreiran je doktor " + doktor.ime + " " + doktor.prezime + " "); 
	}

	static logujKreiranjePacijenta(pacijent)
    {
       console.log("["+ new Date().getFullYear() + "."+new Date().getMonth() + "."+ new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes() +"]" + "kreiran je pacijent " + pacijent.ime + " " + pacijent.prezime + " "); 
		
	}
    	static logujPacijentBiraDoktora(pacijent, doktor)
    {
       console.log("["+ new Date().getFullYear() + "."+new Date().getMonth() + "."+ new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes() +"]" + " pacijent " + pacijent.ime + " " + pacijent.prezime + " je izabrao doktora "+ doktor.ime + " " + doktor.prezime+" "); 
		
	}
	 	static logujObavljanjePregleda(pregled)
    {
       console.log("["+ new Date().getFullYear() + "."+new Date().getMonth() + "."+ new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes() +"]" + doktor.ime + " " + doktor.prezime + " je obavio pregled " + pregled.tip + " "); 
		
	}

}

var doktor = new Doktor ("Marko","Mitrovic","kardiolog");
var pacijent = new Pacijent ("Aleksandar","Ilic","0708989777036","007");
pacijent.izaberiDoktora(doktor);

var pregled1 = new PregledSecera('12-12-2017', '08:00', pacijent);

doktor.zakaziPregled(pregled1);
pregled1.obaviPregled();


var pregled2 = new PregledKrvnogPritiska('12-12-2017', '08:15', pacijent);
pregled2.obaviPregled();
