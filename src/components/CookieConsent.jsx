"use client";

import { useEffect, useState } from "react";
import { Cookie, Settings, CheckCircle2, XCircle } from "lucide-react";

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showManage, setShowManage] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false,
    });

    useEffect(() => {
        const savedConsent = localStorage.getItem("vision_cookie_consent");
        const savedPreferences = localStorage.getItem("vision_cookie_preferences");

        if (!savedConsent) {
            setShowBanner(true);
        }

        if (savedPreferences) {
            setPreferences(JSON.parse(savedPreferences));
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
            preferences: true,
        };

        localStorage.setItem("vision_cookie_consent", "accepted");
        localStorage.setItem("vision_cookie_preferences", JSON.stringify(allAccepted));
        setShowBanner(false);
        setShowManage(false);
    };

    const handleCancel = () => {
        const essentialOnly = {
            necessary: true,
            analytics: false,
            marketing: false,
            preferences: false,
        };

        localStorage.setItem("vision_cookie_consent", "rejected");
        localStorage.setItem("vision_cookie_preferences", JSON.stringify(essentialOnly));
        setShowBanner(false);
        setShowManage(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem("vision_cookie_consent", "customized");
        localStorage.setItem("vision_cookie_preferences", JSON.stringify(preferences));
        setShowBanner(false);
        setShowManage(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9998] px-3 sm:px-4 md:px-6 pb-3 sm:pb-4">
            <div className="mx-auto w-full max-w-[1600px] rounded-3xl border border-blue-200 bg-white shadow-2xl">
                {/* Main Cookie Bar */}
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 p-4 sm:p-5 md:p-6">
                    {/* Left Side */}
                    <div className="flex items-start gap-4 flex-1">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 shrink-0">
                            <Cookie className="w-7 h-7 text-blue-500" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                                We use cookies
                            </h3>

                            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl">
                                We use cookies to improve your browsing experience, analyze website traffic,
                                and personalize content for Vision Academy. You can accept all cookies,
                                reject optional cookies, or manage your cookie preferences.
                            </p>
                        </div>
                    </div>

                    {/* Right Side Buttons */}
                    <div className="flex flex-wrap xl:flex-nowrap gap-3 xl:justify-end">
                        <button
                            onClick={handleAcceptAll}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-blue-600 transition-all duration-300"
                        >
                            <CheckCircle2 className="w-5 h-5" />
                            Accept Cookies
                        </button>

                        <button
                            onClick={handleCancel}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-300"
                        >
                            <XCircle className="w-5 h-5" />
                            Cancel
                        </button>

                        <button
                            onClick={() => setShowManage(!showManage)}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-blue-700 hover:bg-blue-100 transition-all duration-300"
                        >
                            <Settings className="w-5 h-5" />
                            Manage Cookies
                        </button>
                    </div>
                </div>

                {/* Manage Preferences Panel */}
                {showManage && (
                    <div className="border-t border-gray-200 bg-gray-50 px-4 sm:px-5 md:px-6 py-5 rounded-b-3xl">
                        <div className="max-w-7xl mx-auto">
                            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                                Manage Cookie Preferences
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                                {/* Necessary */}
                                <div className="rounded-2xl bg-white border border-gray-200 p-4">
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="font-semibold text-gray-900">Necessary</p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Required for website functionality.
                                            </p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={preferences.necessary}
                                            disabled
                                            className="h-5 w-5 accent-blue-500 cursor-not-allowed"
                                        />
                                    </div>
                                </div>

                                {/* Preferences */}
                                <div className="rounded-2xl bg-white border border-gray-200 p-4">
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="font-semibold text-gray-900">Preferences</p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Save your settings and choices.
                                            </p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={preferences.preferences}
                                            onChange={() =>
                                                setPreferences((prev) => ({
                                                    ...prev,
                                                    preferences: !prev.preferences,
                                                }))
                                            }
                                            className="h-5 w-5 accent-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* Analytics */}
                                <div className="rounded-2xl bg-white border border-gray-200 p-4">
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="font-semibold text-gray-900">Analytics</p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Help us understand site performance.
                                            </p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={preferences.analytics}
                                            onChange={() =>
                                                setPreferences((prev) => ({
                                                    ...prev,
                                                    analytics: !prev.analytics,
                                                }))
                                            }
                                            className="h-5 w-5 accent-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* Marketing */}
                                <div className="rounded-2xl bg-white border border-gray-200 p-4">
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="font-semibold text-gray-900">Marketing</p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Personalized offers and promotions.
                                            </p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={preferences.marketing}
                                            onChange={() =>
                                                setPreferences((prev) => ({
                                                    ...prev,
                                                    marketing: !prev.marketing,
                                                }))
                                            }
                                            className="h-5 w-5 accent-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Manage Buttons */}
                            <div className="mt-5 flex flex-wrap gap-3">
                                <button
                                    onClick={handleSavePreferences}
                                    className="rounded-full bg-blue-500 px-5 py-3 text-sm sm:text-base font-semibold text-white hover:bg-blue-600 transition-all duration-300"
                                >
                                    Save Preferences
                                </button>

                                <button
                                    onClick={handleAcceptAll}
                                    className="rounded-full border border-blue-200 bg-white px-5 py-3 text-sm sm:text-base font-semibold text-blue-700 hover:bg-blue-50 transition-all duration-300"
                                >
                                    Accept All
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}