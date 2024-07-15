import { Text, View, Image } from "react-native";

import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

import useFetchWeatherForecast from "../hooks/useFetchWeatherForecast";

import LoadingErrorComponent from "../components/LoadingErrorComponent";
import { capitalizeFirstLetter } from "../utils.js";
import { tomorrowScreenStyles as styles } from "../styles.js";

const TomorrowScreen = () => {
  const location = "London";
  const { forecastData, isLoading, error } = useFetchWeatherForecast(
    location,
    2
  );

  const formatDate = (dateString) => {
    if (dateString) {
      const parsedDate = parseISO(dateString);
      return format(parsedDate, "EEEE dd/MM", { locale: es });
    }
    return "No disponible";
  };

  const getValue = (data, defaultValue = "No disponible") => {
    return data !== undefined && data !== null ? data : defaultValue;
  };

  const day = forecastData && forecastData.length > 1 ? forecastData[1] : null;

  return (
    <View style={styles.container}>
      <LoadingErrorComponent isLoading={isLoading} error={error}>
        {day && (
          <View>
            <View style={styles.infoPrimaryContainer}>
              <View>
                <Text style={styles.infoPrimaryDate}>
                  {"Mañana, "}
                  {capitalizeFirstLetter(formatDate(day.date))}
                </Text>
                <Text style={styles.infoPrimaryText}>
                  {getValue(day?.day?.condition?.text)}
                </Text>
                <Text style={styles.infoPrimaryText}>
                  Máx {getValue(day?.day?.maxtemp_c)}°C - Min{" "}
                  {getValue(day?.day?.mintemp_c)}°C
                </Text>
              </View>
              <Image
                style={styles.infoPrimaryIcon}
                source={{
                  uri: `https:${getValue(day?.day?.condition?.icon, "")}`,
                }}
              />
            </View>
            <View style={styles.infoSecondaryContainer}>
              <View>
                <Text style={styles.infoSecondaryText}>Humedad</Text>
                <Text style={styles.infoSecondaryText}>Viento</Text>
                <Text style={styles.infoSecondaryText}>
                  Probabilidad de lluvia
                </Text>
                <Text style={styles.infoSecondaryText}>Precipitación</Text>
                <Text style={styles.infoSecondaryText}>Visibilidad</Text>
                <Text style={styles.infoSecondaryText}>Indice UV</Text>
                <Text style={styles.infoSecondaryText}>Salida del sol</Text>
                <Text style={styles.infoSecondaryText}>Puesta del sol</Text>
              </View>
              <View>
                <Text style={styles.infoSecondaryText}>
                  {getValue(day?.day?.avghumidity)}%
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(day?.day?.maxwind_kph)} Km/H
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(day?.day?.daily_chance_of_rain)}%
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(day?.day?.totalprecip_mm)} mm
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(day?.day?.avgvis_km)} km
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(day?.day?.uv)}
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(day?.astro?.sunrise)}
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(day?.astro?.sunset)}
                </Text>
              </View>
            </View>
          </View>
        )}
      </LoadingErrorComponent>
    </View>
  );
};

export default TomorrowScreen;
