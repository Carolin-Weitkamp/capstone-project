import styled from 'styled-components';

export default function privacy() {
  return (
    <Hosts>
      <p>Datenschutz</p>
      <p>
        Allgemeines Beim Aufrufen dieser Website werden durch den auf Ihrem
        Endgerät verwendeten Browser automatisch Informationen an den Server
        meiner Website gesendet. Diese Informationen werden temporär in einem
        sog. Logfile gespeichert. Folgende Informationen werden dabei erfasst
        und bis zur automatisierten Löschung gespeichert: IP-Adresse des
        anfragenden Rechners Datum und Uhrzeit des Zugriffs Name und URL der
        abgerufenen Datei Website, von der aus der Zugriff erfolgt
        (Referrer-URL) verwendeter Browser und ggf. das Betriebssystem Ihres
        Rechners sowie der Name Ihres Access-Providers Die genannten Daten
        werden zu folgenden Zwecken verarbeitet: Gewährleistung eines
        reibungslosen Verbindungsaufbaus der Website Gewährleistung einer
        komfortablen Nutzung unserer Website Auswertung der Systemsicherheit und
        -stabilität sowie zu weiteren administrativen Zwecken. Wenn Sie mit mir
        in Kontakt treten, speichere ich Ihre Angaben zur Bearbeitung der
        Anfrage. Weitere personenbezogene Daten speichere und nutze ich nur,
        wenn Sie dazu einwilligen oder dies ohne besondere Einwilligung
        gesetzlich zulässig ist. Rechtsgrundlage für die Datenverarbeitung ist
        Art. 6 Abs. 1 S. 1 lit. f DSGVO.
      </p>
    </Hosts>
  );
}

const Hosts = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
`;
