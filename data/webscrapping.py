import requests
from bs4 import BeautifulSoup
import re


def extract_numeric_value(text):
    # Supprimer tous les caractères non numériques du texte
    numeric_text = ''.join(filter(str.isdigit, text))
    # Convertir le texte numérique en entier
    numeric_value = int(numeric_text)
    return numeric_value

def extract_quantity(td_text):
    # Utiliser une expression régulière pour extraire la quantité (par exemple, "1x")
    match = re.search(r'(\d+)x', td_text)
    if match:
        return match.group(1)
    else:
        return None

def gestion_section(reward_section):
    # Trouver tous les tableaux à l'intérieur de la section
    tables = reward_section.find_all('table')

    # Parcourir tous les tableaux
    for table in tables:
        # Imprimer le contenu de chaque tableau
        #print(table.prettify())
        lignes = table.find_all('tr')

        for ligne in lignes:
            lignesTD = ligne.find_all('td')
            #print(len(lignesTD))
            if len(lignesTD) == 2 :
                #print(lignesTD[0])
                print(extract_quantity(lignesTD[0].text))
                print(extract_numeric_value(lignesTD[1].text))
                a_element = lignesTD[0].find('a')
                # Vérifier si la balise <a> a été trouvée
                if a_element:
                    # Extraire le lien href
                    href = a_element.get('href')
                    print(href)
            if len(lignesTD) == 3 : 
                #print(lignesTD[1])
                print(extract_quantity(lignesTD[1].text))
                print(extract_numeric_value(lignesTD[2].text))
                a_element = lignesTD[1].find('a')
                # Vérifier si la balise <a> a été trouvée
                if a_element:
                    # Extraire le lien href
                    href = a_element.get('href')
                    print(href)

url = "https://mhrise.mhrice.info/small-monster/013_00.html"

try:
    response = requests.get(url)

    # Vérifier si la requête a réussi (code 200)
    if response.status_code == 200:
        # Utiliser BeautifulSoup pour parser le contenu HTML
        soup = BeautifulSoup(response.text, 'html.parser')

        # Trouver la section avec l'ID "s-reward-lr"
        reward_section = soup.find(id='s-reward-lr')
        # Vérifier si la section a été trouvée
        if reward_section:
            print("Section low")
            gestion_section(reward_section)            
        else:
            print("Section low introuvable.")

        # Trouver la section avec l'ID "s-reward-lr"
        reward_section = soup.find(id='s-reward-hr')
        # Vérifier si la section a été trouvée
        if reward_section:
            print("Section high")
            gestion_section(reward_section)            
        else:
            print("Section high introuvable.")

        # Trouver la section avec l'ID "s-reward-lr"
        reward_section = soup.find(id='s-reward-mr')
        # Vérifier si la section a été trouvée
        if reward_section:
            print("Section master")
            gestion_section(reward_section)            
        else:
            print("Section master introuvable.")

    else:
        print(f"Erreur de requête HTTP: {response.status_code}")

except requests.exceptions.RequestException as e:
    print(f"Erreur lors de la requête HTTP : {e}")
