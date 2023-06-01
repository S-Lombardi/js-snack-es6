Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1-Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2-Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3-Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:
```
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84

SVOLGIMENTO : preparare l'aula per un nuovo corso

0-creare l'elenco studenti tramite un array di 7 oggetti
1-Creare una nuovo array con la stessa lista di studenti ma il nome stampato deve essere tutto maiuscolo
   1.1 Utilizzare map() e .toUpperCase
2-Nuovo array per creare l'elenco di studenti che hanno un voto sueperiore a 70
  2.2 Utilizzare filter() e un controllo
  2.3 condizione:  il voto dello studente deve essere > di 70
3-Nuovo array  di studenti che hanno :
 3.1 condizione: voto studente deve essere > di 70 ma anche id > di 120
  
