import requests
from bs4 import BeautifulSoup

def scrape_lawyers():
    url = "https://avocatalgerien.com/"
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        #Assuming lawyers' information is within a nested structure
        container = soup.find('div', class_='container')
        if container:
            content_mid = container.find('div',class_='row rounded')
            if content_mid:
                content_inner = content_mid.find('div', id='content-inner')
                if content_inner:
                    lawyer_list = content_inner.find('div', class_='list')
                    if lawyer_list:
                        #Assuming each lawyer is within a nested structure
                        lawyers = lawyer_list.find_all('div', recursive=False)

                        for lawyer in lawyers:
                            #Extract and print information about each lawyer
                            image_url = lawyer.find('img')['src'] if lawyer.find('img') else None
                            name = lawyer.find('h2', class_='entry-title').find('a').text.strip()
                            categories = [cat.text.strip() for cat in lawyer.find_all('p', class_='listing-cat')]

                            location = lawyer.find('div', itemprop='location')
                            phone_number = location.find('p', class_='listing-phone').find('strong', class_='reveal').text.strip()
                            address = location.find('p', class_='listing-address').text.strip()

                            description = lawyer.find('div', class_='entry-content').text.strip() if lawyer.find('div', class_='entry-content') else None

                            #Print or process the extracted data as needed
                            print("Image URL:", image_url)
                            print("Name:", name)
                            print("Categories:", categories)
                            print("Phone Number:", phone_number)
                            print("Address:", address)
                            print("Description:", description)
                            print("\n")
                    else:
                        print("Error: Unable to find the 'list' div.")
                else:
                    print("Error: Unable to find the 'content-inner' div.")
            else:
                print("Error: Unable to find the 'content-mid' div.")
        else:
            print("Error: Unable to find the 'container' div.")
    else:
        print(f"Error: Unable to fetch the webpage (Status Code: {response.status_code})")

if __name__ == "__main__":
    scrape_lawyers()

 
 
 

