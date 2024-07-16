import { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";

import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

import useFetchWeatherForecast from "../hooks/useFetchWeatherForecast";

import LoadingErrorComponent from "../components/LoadingErrorComponent";
import { capitalizeFirstLetter } from "../utils.js";
import { fourteenDaysScreenStyles as styles } from "../styles.js";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FourteenDaysScreen = () => {
  const location = "London";
  const [expandedDay, setExpandedDay] = useState(0);

  const { forecastData, isLoading, error } = useFetchWeatherForecast(
    location,
    14
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

  const handleExpand = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedDay(expandedDay === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <LoadingErrorComponent isLoading={isLoading} error={error}>
        {forecastData && (
          <ScrollView style={styles.scrollView}>
            {forecastData.map((day, index) => (
              <View key={index}>
                <TouchableWithoutFeedback onPress={() => handleExpand(index)}>
                  <View
                    style={[
                      styles.dayContainer,
                      index === forecastData.length - 1 &&
                        styles.lastDayContainer,
                      expandedDay === index && styles.expandedDayContainer,
                    ]}>
                    <View>
                      <Text style={styles.date}>
                        {capitalizeFirstLetter(formatDate(day.date))}
                      </Text>
                      <Text style={styles.text}>
                        {getValue(day?.day?.condition?.text)}
                      </Text>
                    </View>
                    <View style={styles.dayInfo}>
                      <Image
                        style={styles.icon}
                        source={{
                          uri: `https:${getValue(
                            day?.day?.condition?.icon,
                            ""
                          )}`,
                        }}
                      />
                      <View style={styles.dayInfoTemp}>
                        <Text style={styles.tempMax}>
                          {getValue(day?.day?.maxtemp_c)}°C
                        </Text>
                        <Text style={styles.tempMin}>
                          {getValue(day?.day?.mintemp_c)}°C
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
                {expandedDay === index && (
                  <View style={styles.expandedInfo}>
                    <View>
                      <Text style={styles.expandedText}>Viento</Text>
                      <Text style={styles.expandedText}>Indice UV</Text>
                      <Text style={styles.expandedText}>Humedad</Text>
                      <Text style={styles.expandedText}>Visibilidad</Text>
                      <Text style={styles.expandedText}>Salida del sol</Text>
                      <Text style={styles.expandedText}>Puesta del sol</Text>
                    </View>
                    <View>
                      <Text style={styles.expandedText}>
                        {getValue(day?.day?.maxwind_kph)} Km/H
                      </Text>
                      <Text style={styles.expandedText}>
                        {getValue(day?.day?.uv)}
                      </Text>
                      <Text style={styles.expandedText}>
                        {getValue(day?.day?.avghumidity)}%
                      </Text>
                      <Text style={styles.expandedText}>
                        {getValue(day?.day?.avgvis_km)} Km
                      </Text>
                      <Text style={styles.expandedText}>
                        {getValue(day?.astro?.sunrise)}
                      </Text>
                      <Text style={styles.expandedText}>
                        {getValue(day?.astro?.sunset)}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        )}
      </LoadingErrorComponent>
    </View>
  );
};

export default FourteenDaysScreen;
